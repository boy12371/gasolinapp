import { Controller, Query, Get, UseInterceptors } from "@nestjs/common";
import { StationsService } from "./stations.service";
import { ExcludeFieldInterceptor } from "interceptor";

@Controller("stations")
@UseInterceptors(ExcludeFieldInterceptor)
export class StationsController {
  constructor(private readonly service: StationsService) { }

  @Get()
  async findAll(
    @Query("latitude") latitude: string,
    @Query("longitude") longitude: string
  ) {
    return this.service.findAll(latitude, longitude);
  }
}
