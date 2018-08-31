import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fuel } from "./fuels.entity";

@Injectable()
export class FuelsService {
  constructor(
    @InjectRepository(Fuel) private readonly repository: Repository<Fuel>
  ) {}

  async findAll(stationId: string): Promise<Array<Fuel>> {
    return await this.repository.find({
      relations: ["type"],
      where: { station: { uuid: stationId } }
    });
  }
}
