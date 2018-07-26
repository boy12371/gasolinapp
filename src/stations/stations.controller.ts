import { Controller, Query, Get } from "@nestjs/common";
import { StationsService } from "./stations.service";

@Controller("stations")
export class StationsController {
  constructor(private readonly service: StationsService) {}

  @Get()
  async findAll(
    @Query("latitude") latitude: string,
    @Query("latitude") longitude: string
  ) {
    return this.service.findAll(latitude, longitude);
  }
}
