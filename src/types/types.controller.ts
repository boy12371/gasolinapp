import { Controller, Get } from "@nestjs/common";
import { TypesService } from "./types.service";

@Controller("types")
export class TypesController {
  constructor(private readonly service: TypesService) {}

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}
