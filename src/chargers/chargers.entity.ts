import { Entity, PrimaryColumn, Column } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class Charger {
  @PrimaryColumn()
  uuid: string;

  @Column()
  name: string;

  @Column()
  distributor: string;

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

  @Column()
  tension: string;

  @Column()
  points: string;

  @Column("point")
  @Exclude()
  point: string;
}
