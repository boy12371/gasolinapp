import { Entity, Column, ManyToOne } from "typeorm";
import { Station } from "../stations/stations.entity";
import { Type } from "../types/types.entity";

@Entity()
export class Fuel {
  @Column("float")
  price: number;

  @ManyToOne(type => Type, type => type.fuels, { primary: true })
  type: Type;

  @ManyToOne(type => Station, station => station.fuels, { primary: true })
  station: Station;
}
