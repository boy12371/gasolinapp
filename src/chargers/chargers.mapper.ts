import { Injectable, Logger } from "@nestjs/common";
import { UuidService } from "../uuid/uuid.service";
import { Charger } from "./chargers.entity";
import * as xlsx from "xlsx";

@Injectable()
export class ChargersMapper {
  constructor(private readonly uuidService: UuidService) {}

  toChargers(xls: string): Array<Charger> {
    let workbook = xlsx.read(xls, { type: "string" });
    let jsonArray = xlsx.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
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
