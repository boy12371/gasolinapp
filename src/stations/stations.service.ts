import { Injectable, HttpService } from "@nestjs/common";
import { StationsMapper } from "./stations.mapper";
import { Station } from "./stations.entity";
import { Repository } from "typeorm";
import { Type } from "types/types.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Fuel } from "fuels/fuels.entity";

@Injectable()
export class StationsService {
  url: string =
    "https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/";
  config = {
    headers: {
      Accept: "application/json"
    }
  };

  constructor(
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
    @InjectRepository(Fuel) private readonly fuelRepository: Repository<Fuel>,
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
    private readonly httpService: HttpService,
    private readonly stationsMapper: StationsMapper
  ) { }

  async loadStations(): Promise<Array<Station>> {
    try {
      const response = await this.httpService
        .get(this.url, this.config)
        .toPromise();

      const types = await this.typeRepository.find();
      const stations = await this.stationsMapper.toStations(
        response.data,
        types
      );

      return await this.stationRepository.save(stations);
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(latitude: string, longitude: string) {
    return await this.stationRepository.find({
      take: 20,
      where: `ST_Distance_Sphere(POINT(${latitude},${longitude}), point) <= 10000`,
      relations: ["fuels", "fuels.type"]
    });
  }
}
