import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UuidService } from "../uuid/uuid.service";
import { Type } from "./types.entity";

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly repository: Repository<Type>,
    private readonly uuidService: UuidService
  ) {}

  async createTypes(): Promise<Array<Type>> {
    const types: Array<Type> = new Array<Type>();

    types.push(new Type("Gasoleo A", "Gasóleo A"));
    types.push(new Type("Gasoleo B", "Gasóleo B"));
    types.push(new Type("Biodiesel", "Biodiésel"));
    types.push(new Type("Gasolina 95 Protección", "Gasolina 95"));
    types.push(new Type("Gasolina  98", "Gasolina 98"));

    for (let type of types) {
      type.uuid = this.uuidService.create(type.name);
    }

    return await this.repository.save(types);
  }

  async findAll(): Promise<Array<Type>> {
    return await this.repository.find();
  }
}
