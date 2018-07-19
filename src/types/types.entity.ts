import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Fuel } from 'fuels/fuels.entity';

@Entity()
export class Type {
  constructor(id: number, name: string, renderableName: string) {
    this.id = id
    this.name = name;
    this.renderableName = renderableName;
  }

  @PrimaryColumn() id: number;

  @Column() name: string;

  @Column() renderableName: string;

  @OneToMany(type => Fuel, fuel => fuel.type)
  fuels: Array<Fuel>;
}
