import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuelsService } from "./fuels.service";
import { FuelsController } from "./fuels.controller";
import { Fuel } from "./fuels.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Fuel])],
  controllers: [FuelsController],
  providers: [FuelsService]
})
export class FuelsModule {}
