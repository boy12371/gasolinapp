import { Controller, Get, Param } from "../../node_modules/@nestjs/common";
import { FuelsService } from "./fuels.service";

@Controller('fuels')
export class FuelsController {
    constructor(private readonly service: FuelsService) { }

    @Get()
    async findAll(@Param('stationId') stationId: string) {
        return this.service.findAll(stationId);
    }
}
