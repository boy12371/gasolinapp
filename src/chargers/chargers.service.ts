import { Injectable, HttpService, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Charger } from "./chargers.entity";
import { ChargersMapper } from "./chargers.mapper";
import { ConfigService } from "../config/config.service";
import { ChargersGeocoder } from "./chargers.geocoder";

@Injectable()
export class ChargersService {
  constructor(
    @InjectRepository(Charger)
    private readonly chargersRepository: Repository<Charger>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly chargersMapper: ChargersMapper,
    private readonly chargersGeocoder: ChargersGeocoder
  ) {}

  async loadChargers(): Promise<Array<Charger>> {
    const response = await this.httpService
      .get(this.configService.getChargersUrl())
      .toPromise();
    const chargers = await this.chargersMapper.toChargers(response.data);
    const geocodedChargers = await this.chargersGeocoder.geocodeAll(chargers);
    return await this.chargersRepository.save(geocodedChargers);
  }

  async findOne(uuid: string) {
    return await this.chargersRepository.find({ where: { uuid: uuid } });
  }

  async findAll(
    latitude: string,
    longitude: string,
    take: number,
    skip: number
  ) {
    return await this.chargersRepository.find({
      take: take,
      skip: skip,
      where: `ST_Distance_Sphere(point, POINT(${latitude},${longitude})) <= 10000`
    });
  }
}
