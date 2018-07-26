import { HttpService, Injectable } from "../../node_modules/@nestjs/common";
import { Charger } from "./chargers.entity";
import * as Papaparse from "papaparse"

@Injectable()
export class ChargersService {
    GoogleApiKey = "AIzaSyBTOhQ9LhBngikK4C3eNC2btrEV9VOF724";
    geoCodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?addres=YOUR_ADDRESS&key=YOUR_API_KEY"

    url = "https://sedeaplicaciones.minetur.gob.es/Greco/DatosRISP.aspx?fichero=exportarcsv"

    constructor(private readonly httpService: HttpService) { }

    async loadChargers(): Promise<Array<Charger>> {
        const response = await this.httpService
            .get(this.url)
            .toPromise();

        const results = Papaparse.parse(response.data, {
            header: true,
            step: function (row) {
                console.log("Row:", row.data);
            },
            complete: function (results) {
                console.log(results);
            }
        });

        return results.data
    }

}