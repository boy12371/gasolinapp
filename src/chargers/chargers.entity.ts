import { Entity, Column, PrimaryColumn } from "../../node_modules/typeorm";

@Entity()
export class Charger {

    @PrimaryColumn('uuid') uuid: string;

    @Column() name: string;

    @Column() distributor: string;

    @Column() address: string;

    @Column() city: string;

    @Column() state: string;

    @Column() latitude: string;

    @Column() longitude: string;

    @Column() tension: string;

    @Column() points: string;

}