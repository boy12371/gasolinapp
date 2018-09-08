import * as dotenv from "dotenv";
import * as fs from "fs";

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getStationsUrl(): string {
    return this.envConfig.STATIONS_URL;
  }

  getChargersUrl(): string {
    return this.envConfig.CHARGERS_URL;
  }

  getGeocodingUrl(): string {
    return this.envConfig.GEO_CODING_URL;
  }

  getGoogleApiKey(): string {
    return this.envConfig.GOOGLE_API_KEY;
  }
}
