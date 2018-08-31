import { Controller, Query, Get, UseInterceptors, Param } from "@nestjs/common";
import { StationsService } from "./stations.service";
import { ExcludeFieldInterceptor } from "interceptor";

@Controller("stations")
@UseInterceptors(ExcludeFieldInterceptor)
export class StationsController {
  constructor(private readonly service: StationsService) {}

  @Get(":uuid")
  async findOne(@Param("uuid") uuid: string) {
    return this.service.findOne(uuid);
  }

  @Get()
  async findAll(
    @Query("latitude") latitude: string,
    @Query("longitude") longitude: string
  ) {
    return this.service.findAll(latitude, longitude);
  }
}
