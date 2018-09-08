import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { StationsModule } from "../stations/stations.module";
import { TypesModule } from "../types/types.module";
import { FuelsModule } from "../fuels/fuels.module";

@Module({
  imports: [TypeOrmModule.forRoot(), StationsModule, TypesModule, FuelsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
