import { Injectable } from '@nestjs/common';
import { Station } from './stations.entity';
import { Fuel } from 'fuels/fuels.entity';
import { Type } from 'types/types.entity';

@Injectable()
export class StationsMapper {
  constructor() {}

  toStations(json: any, types: Array<Type>): Array<Station> {
    const jsonArray: Array<any> = json['ListaEESSPrecio'];
    return jsonArray.slice(0, 30).map(json => this.toStation(json, types));
  }

  toStation(json: any, types: Array<Type>): Station {
    let station: Station = new Station();

    station.id = json['IDEESS']
    station.name = json['Rótulo'];
    station.schedule = json['Horario'];
    station.postalCode = json['C.P.'];
    station.address = json['Dirección'];
    station.city = json['Municipio'];
    station.state = json['Provincia'];
    station.latitude = json['Latitud'];
    station.longitude = json['Longitud (WGS84)'];

    const fuels: Array<Fuel> = new Array<Fuel>();

    for (let type of types) {
      if(json['Precio ' + type.name]) {
        const fuel = new Fuel();
        fuel.price = json['Precio ' + type.name];
        fuel.station = station;
        fuel.type = type;
        fuels.push(fuel);
      }
    }

    station.fuels = fuels;

    return station;
  }
}
