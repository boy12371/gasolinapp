import { NestFactory } from "@nestjs/core";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "app/app.module";
import { StationsCron } from "stations/stations.cron";
import { TypesService } from "types/types.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await createTypes(app);
  await startStationsCron(app);
}

async function createTypes(app: INestApplication) {
  await app.get(TypesService).createTypes();
}

async function startStationsCron(app: INestApplication) {
  await app.get(StationsCron).start();
}

bootstrap();
