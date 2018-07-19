import { InjectRepository } from "../../node_modules/@nestjs/typeorm";
import { Fuel } from "./fuels.entity";
import { Repository } from "../../node_modules/typeorm";
import { Injectable } from "../../node_modules/@nestjs/common";

@Injectable()
export class FuelsService {
    constructor(@InjectRepository(Fuel) private readonly repository: Repository<Fuel>, ) { }

    async findAll(stationId: string): Promise<Array<Fuel>> {
        return await this.repository.find({ take: 10, where: { stationId: stationId } })
    }
}
