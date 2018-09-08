import { Injectable, HttpService, Logger } from "@nestjs/common";
import { StationsMapper } from "./stations.mapper";
import { Station } from "./stations.entity";
import { Repository } from "typeorm";
import { Type } from "../types/types.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ConfigService } from "config/config.service";

@Injectable()
export class StationsService {
  constructor(
    @InjectRepository(Station)
    private readonly stationRepository: Repository<Station>,
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
    private readonly httpService: HttpService,
    private readonly stationsMapper: StationsMapper,
    private readonly configService: ConfigService
  ) {}

  async loadStations(): Promise<Array<Station>> {
    try {
      const response = await this.httpService
        .get(this.configService.getStationsUrl(), {
          headers: { Accept: "application/json" }
        })
        .toPromise();

      const types = await this.typeRepository.find();
      const stations = await this.stationsMapper.toStations(
        response.data,
        types
      );

      return await this.stationRepository.save(stations);
    } catch (e) {
      Logger.error(e);
    }
  }

  async findOne(uuid: string) {
    return await this.stationRepository.find({
      where: { uuid: uuid },
      relations: ["fuels", "fuels.type"]
    });
  }

  async findAll(
    latitude: string,
    longitude: string,
    take: number,
    skip: number
  ) {
    return await this.stationRepository.find({
      take: take,
      skip: skip,
      where: `ST_Distance_Sphere(point, POINT(${latitude},${longitude})) <= 10000`,
      relations: ["fuels", "fuels.type"]
    });
  }
}
