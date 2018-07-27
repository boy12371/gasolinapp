import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { StationsModule } from "stations/stations.module";
import { TypesModule } from "types/types.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuelsModule } from "fuels/fuels.module";
import { ChargersModule } from "chargers/chargers.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StationsModule,
    TypesModule,
    FuelsModule,
    ChargersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
