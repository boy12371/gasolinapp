import { Module, HttpModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Charger } from "./chargers.entity";
import { ChargersController } from "./chargers.controller";
import { ChargersService } from "./chargers.service";
import { ChargersMapper } from "./chargers.mapper";
import { ChargersGeocoder } from "./chargers.geocoder";
import { ClassTransformerInterceptor } from "../class.transformer.interceptor";
import { ConfigModule } from "../config/config.module";
import { UuidModule } from "../uuid/uuid.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Charger]),
    HttpModule,
    ConfigModule,
    UuidModule
  ],
  controllers: [ChargersController],
  providers: [
    ChargersService,
    ChargersMapper,
    ChargersGeocoder,
    ClassTransformerInterceptor
  ]
})
export class ChargersModule {}
