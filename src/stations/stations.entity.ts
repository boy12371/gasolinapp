import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fuel } from '../types/fuels.entity';

@Entity()
export class Station {
  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;

  @Column() schedule: string;

  @Column() postalCode: string;

  @Column() address: string;

  @Column() city: string;

  @Column() state: string;

  @Column() latitude: string;

  @Column() longitude: string;

  @OneToMany(type => Fuel, fuel => fuel.station)
  fuels: Array<Fuel>;
}
