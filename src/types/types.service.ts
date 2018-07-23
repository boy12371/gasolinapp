import { Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";
import { Type } from "./types.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly repository: Repository<Type>
  ) {}

  async loadTypes(): Promise<Array<Type>> {
    const types: Array<Type> = new Array<Type>();
    types.push(new Type(1, "Gasoleo A", "Gasóleo A"));
    types.push(new Type(2, "Gasoleo B", "Gasóleo B"));
    types.push(new Type(3, "Biodiesel", "Biodiésel"));
    types.push(new Type(4, "Gasolina 95 Protección", "Gasolina 95"));
    types.push(new Type(5, "Gasolina  98", "Gasolina 98"));
    return await this.repository.save(types);
  }

  async findAll(): Promise<Array<Type>> {
    return await this.repository.find();
  }
}
