import { Module, HttpModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Charger } from "./chargers.entity";
import { ChargersController } from "./chargers.controller";
import { ChargersService } from "./chargers.service";
import { UuidService } from "uuid/uuid.service";


@Module({
  imports: [TypeOrmModule.forFeature([Charger]), HttpModule],
  controllers: [ChargersController],
  providers: [ChargersService, UuidService]
})
export class ChargersModule {}
