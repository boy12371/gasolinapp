import { Injectable, HttpService, Logger } from "@nestjs/common";
import { Charger } from "./chargers.entity";
import { ConfigService } from "../config/config.service";

@Injectable()
export class ChargersGeocoder {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ) {}

  async geocodeAll(chargers: Array<Charger>): Promise<Array<Charger>> {
    return await Promise.all(
      chargers.map(
        async (charger): Promise<Charger> => {
          return await this.geocodeOne(charger);
        }
      )
    );
  }

  async geocodeOne(charger: Charger): Promise<Charger> {
    let response = await this.httpService
      .get(this.configService.getGeocodingUrl(), {
        params: {
          address: `${charger.city}, ${charger.address}`,
          key: this.configService.getGoogleApiKey()
        }
      })
      .toPromise();

    try {
      let geometry = response.data["results"][0]["geometry"];

      charger.latitude = geometry["location"]["lat"];
      charger.longitude = geometry["location"]["lng"];
      charger.point = `POINT(${Number(charger.latitude)} ${Number(
        charger.longitude
      )})`;
    } catch (e) {
      Logger.error(`Charger with uuid ${charger.uuid} could not be geocoded.`);
    }

    return charger;
  }
}
