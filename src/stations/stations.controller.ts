import { Controller, Query, Get, UseInterceptors, Param } from "@nestjs/common";
import { StationsService } from "./stations.service";
import { ClassTransformerInterceptor } from "../class.transformer.interceptor";

@Controller("stations")
@UseInterceptors(ClassTransformerInterceptor)
export class StationsController {
  constructor(private readonly service: StationsService) {}

  @Get(":uuid")
  async findOne(@Param("uuid") uuid: string) {
    return this.service.findOne(uuid);
  }

  @Get()
  async findAll(
    @Query("latitude") latitude: string,
    @Query("longitude") longitude: string,
    @Query("take") take: number = 20,
    @Query("skip") skip: number = 0
  ) {
    return this.service.findAll(latitude, longitude, take, skip);
  }
}
