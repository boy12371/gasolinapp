import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { Type } from "./types.entity";
import { Fuel } from "../fuels/fuels.entity";
import { UuidModule } from "uuid/uuid.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Type]),
    TypeOrmModule.forFeature([Fuel]),
    UuidModule
  ],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
