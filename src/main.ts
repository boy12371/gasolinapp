import { NestFactory } from "@nestjs/core";
import { AppModule } from "app/app.module";
import { StationsCron } from "stations/stations.cron";
import { INestApplication, Logger } from "@nestjs/common";
import { TypesService } from "types/types.service";
import * as UUID from "uuid/v5"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await loadTypes(app);
  await startStationsCron(app);
}

async function loadTypes(app: INestApplication) {
  await app.get(TypesService).loadTypes();
}

async function startStationsCron(app: INestApplication) {
  await app.get(StationsCron).start();
}

bootstrap();
