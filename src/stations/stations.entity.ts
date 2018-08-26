import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Fuel } from "fuels/fuels.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Station {
  @PrimaryColumn() id: string;

  @Column() name: string;

  @Column() schedule: string;

  @Column() postalCode: string;

  @Column() address: string;

  @Column() city: string;

  @Column() state: string;

  @Column() latitude: string;

  @Column() longitude: string;

  @Column("point") @Exclude() point: string;

  @OneToMany(type => Fuel, fuel => fuel.station, { cascade: true })
  fuels: Array<Fuel>;
}
