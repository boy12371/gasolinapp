import { Injectable } from "@nestjs/common";
import * as Papaparse from "papaparse";
import { UuidService } from "../uuid/uuid.service";
import { Charger } from "./chargers.entity";

@Injectable()
export class ChargersMapper {
  constructor(private readonly uuidService: UuidService) {}

  toChargers(json: any): Array<Charger> {
    let jsonArray: Array<any> = Papaparse.parse(json, {
      header: true
    }).data;
    return jsonArray.slice(0, 30).map(json => this.toCharger(json));
  }

  toCharger(json: any): Charger {
    let charger: Charger = new Charger();

    charger.uuid = this.uuidService.create(json["Direccion"]);
    charger.name = json["RazonSocial"];
    charger.address = json["Direccion"];
    charger.city = json["Municipio"];
    charger.state = json["Provincia"];
    charger.distributor = json["Distribuidora"];
    charger.points = json["PuntosToma"];
    charger.tension = json["NivelTension"];

    return charger;
  }
}
