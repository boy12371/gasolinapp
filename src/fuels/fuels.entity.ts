import { Entity, Column, ManyToOne } from "typeorm";
import { Type } from "types/types.entity";
import { Station } from "stations/stations.entity";

@Entity()
export class Fuel {
  @Column() price: string;

  @ManyToOne(type => Type, type => type.fuels, { primary: true })
  type: Type;

  @ManyToOne(type => Station, station => station.fuels, { primary: true })
  station: Station;
}
