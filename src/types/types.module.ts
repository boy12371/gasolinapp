import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UuidService } from "uuid/uuid.service";
import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { Type } from "./types.entity";
import { Fuel } from "fuels/fuels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Type]), TypeOrmModule.forFeature([Fuel])],
  controllers: [TypesController],
  providers: [TypesService, UuidService]
})
export class TypesModule {}
