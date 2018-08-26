import { InjectRepository } from "@nestjs/typeorm";
import { Fuel } from "./fuels.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

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
