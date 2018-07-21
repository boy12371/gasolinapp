import { Controller, Get, Param, Query } from "../../node_modules/@nestjs/common";
import { FuelsService } from "./fuels.service";

@Controller('fuels')
export class FuelsController {
    constructor(private readonly service: FuelsService) { }

    @Get()
    async findAll(@Query('stationId') stationId) {
        return this.service.findAll(stationId);
    }
}
