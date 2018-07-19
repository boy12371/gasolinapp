import { Module, HttpModule } from '@nestjs/common';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { StationsMapper } from './stations.mapper';
import { StationsCron } from './stations.cron';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'types/types.entity';
import { Station } from './stations.entity';
import { Fuel } from 'fuels/fuels.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Type]),
    TypeOrmModule.forFeature([Station]),
    TypeOrmModule.forFeature([Fuel]),
    HttpModule
  ],
  controllers: [StationsController],
  providers: [StationsService, StationsMapper, StationsCron]
})
export class StationsModule {}
