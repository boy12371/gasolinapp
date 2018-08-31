import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Fuel } from "../fuels/fuels.entity";

@Entity()
export class Station {
  @PrimaryColumn()
  uuid: string;

  @Column()
  name: string;

  @Column()
  schedule: string;

  @Column()
  postalCode: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column("point")
  @Exclude()
  point: string;

  @OneToMany(type => Fuel, fuel => fuel.station, { cascade: true })
  fuels: Array<Fuel>;
}
