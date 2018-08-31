import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Fuel } from "../fuels/fuels.entity";

@Entity()
export class Type {
  constructor(name: string, renderableName: string) {
    this.name = name;
    this.renderableName = renderableName;
  }

  @PrimaryColumn()
  uuid: string;

  @Column()
  name: string;

  @Column()
  renderableName: string;

  @OneToMany(type => Fuel, fuel => fuel.type)
  fuels: Array<Fuel>;
}
