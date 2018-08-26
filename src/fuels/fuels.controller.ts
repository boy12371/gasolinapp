import { Controller, Get, Query } from "@nestjs/common";
import { FuelsService } from "./fuels.service";

@Controller("fuels")
export class FuelsController {
  constructor(private readonly service: FuelsService) {}

  @Get()
  async findAll(@Query("stationUuid") stationId) {
    return this.service.findAll(stationId);
  }
}
