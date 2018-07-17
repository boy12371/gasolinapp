import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { StationsService } from './stations.service';

@Controller('stations')
export class StationsController {
  constructor(private readonly service: StationsService) {}

  @Get()
  async findAll(
    @Param('latitude') latitude: string,
    @Param('latitude') longitude: string
  ) {
    return this.service.findAll(latitude, longitude);
  }

  @Get('fetch')
  async fetch() {
    await this.service.loadStations();
    return 'stations fetched!';
  }
}
