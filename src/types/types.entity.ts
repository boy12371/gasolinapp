import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Type {
  constructor(name: string) {
    this.name = name;
  }

  @PrimaryGeneratedColumn() id: number;

  @Column() name: string;
}
