import { Module, HttpModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StationsController } from "./stations.controller";
import { StationsService } from "./stations.service";
import { StationsMapper } from "./stations.mapper";
import { StationsCron } from "./stations.cron";
import { Station } from "./stations.entity";
import { UuidService } from "../uuid/uuid.service";
import { Type } from "../types/types.entity";
import { Fuel } from "../fuels/fuels.entity";
import { ClassTransformerInterceptor } from "../class.transformer.interceptor";

@Module({
  imports: [
    TypeOrmModule.forFeature([Type]),
    TypeOrmModule.forFeature([Station]),
    TypeOrmModule.forFeature([Fuel]),
    HttpModule
  ],
  controllers: [StationsController],
  providers: [
    StationsService,
    StationsMapper,
    StationsCron,
    ClassTransformerInterceptor,
    UuidService
  ]
})
export class StationsModule {}
