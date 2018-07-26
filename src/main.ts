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
  await generateUUID()
}

async function loadTypes(app: INestApplication) {
  await app.get(TypesService).loadTypes();
}

async function startStationsCron(app: INestApplication) {
  await app.get(StationsCron).start();
}

async function generateUUID() {
  // Note: Custom namespaces should be a UUID string specific to your application!
  // E.g. the one here was generated using this modules `uuid` CLI.
  const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
  const uuid = UUID('Hello, World!', MY_NAMESPACE);
  console.log("uuid:  " + uuid)
}

bootstrap();
