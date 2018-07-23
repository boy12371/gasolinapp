import { Controller, Get } from "@nestjs/common";
import { TypesService } from "./types.service";

@Controller("types")
export class TypesController {
  constructor(private readonly service: TypesService) {}

  @Get("load")
  async loadAll() {
    return this.service.loadTypes();
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }
}
