import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Type } from './types.entity';
import { InjectRepository } from '../../node_modules/@nestjs/typeorm';

@Injectable()
export class TypesService {
  constructor(
    @InjectRepository(Type) private readonly repository: Repository<Type>
  ) {}

  async loadTypes() : Promise<Array<Type>>{
    const types: Array<Type> = new Array<Type>();
    types.push(new Type('Gasoleo A'));
    types.push(new Type('Gasoleo B'));
    types.push(new Type('Biodiesel'));
    types.push(new Type('Gasolina 95 Protección'));
    types.push(new Type('Gasolina  98'));
    return await this.repository.save(types);
  }

  async findAll(): Promise<Array<Type>> {
    return await this.repository.find();
  }
}
