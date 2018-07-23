import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Fuel } from "fuels/fuels.entity";
import { FuelsController } from "./fuels.controller";
import { FuelsService } from "./fuels.service";

@Module({
  imports: [TypeOrmModule.forFeature([Fuel])],
  controllers: [FuelsController],
  providers: [FuelsService]
})
export class FuelsModule {}
