import { Controller, Get, Query, Param } from "@nestjs/common";
import { ChargersService } from "./chargers.service";

@Controller("chargers")
export class ChargersController {
  constructor(private readonly chargersService: ChargersService) {}

  @Get(":uuid")
  async findOne(@Param("uuid") uuid: string) {
    return this.chargersService.findOne(uuid);
  }
}
