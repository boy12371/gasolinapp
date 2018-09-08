import { Controller, Get, Query, Param, UseInterceptors } from "@nestjs/common";
import { ChargersService } from "./chargers.service";
import { ClassTransformerInterceptor } from "../class.transformer.interceptor";

@Controller("chargers")
@UseInterceptors(ClassTransformerInterceptor)
export class ChargersController {
  constructor(private readonly chargersService: ChargersService) {}

  @Get(":uuid")
  async findOne(@Param("uuid") uuid: string) {
    return this.chargersService.findOne(uuid);
  }

  @Get()
  async findAll(
    @Query("latitude") latitude: string,
    @Query("longitude") longitude: string,
    @Query("take") take: number = 20,
    @Query("skip") skip: number = 0
  ) {
    return this.chargersService.findAll(latitude, longitude, take, skip);
  }
}
