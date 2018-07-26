import { Module, HttpModule } from "../../node_modules/@nestjs/common";
import { TypeOrmModule } from "../../node_modules/@nestjs/typeorm";
import { Charger } from "./chargers.entity";
import { ChargersController } from "./chargers.controller";
import { ChargersService } from "./chargers.service";

@Module({
    imports: [TypeOrmModule.forFeature([Charger]), HttpModule],
    controllers: [ChargersController],
    providers: [ChargersService]
  })
  export class AppModule {}