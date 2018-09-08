import { Injectable, HttpService } from "@nestjs/common";
import { Charger } from "./chargers.entity";
import * as Papaparse from "papaparse";
import { ConfigService } from "config/config.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ChargersService {
  constructor(
    @InjectRepository(Charger)
    private readonly chargersRepository: Repository<Charger>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async loadChargers(): Promise<Array<Charger>> {
    const response = await this.httpService
      .get(this.configService.getChargersUrl())
      .toPromise();
    const results = Papaparse.parse(response.data, {
      header: true,
      step: function(row) {
        console.log("Row:", row.data);
      },
      complete: function(results) {
        console.log(results);
      }
    });
    return results.data;
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
