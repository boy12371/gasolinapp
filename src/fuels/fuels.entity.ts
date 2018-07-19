import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne
} from 'typeorm';
import { Type } from 'types/types.entity';
import { Station } from 'stations/stations.entity';

@Entity()
export class Fuel {
  @PrimaryGeneratedColumn() id: number;

  @Column() price: string;

  @ManyToOne(type => Type, type => type.fuels)
  type: Type;

  @ManyToOne(type => Station, station => station.fuels)
  station: Station;
}
