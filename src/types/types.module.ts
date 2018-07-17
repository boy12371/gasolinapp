import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { Type } from './types.entity';
import { Fuel } from './fuels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Type]), TypeOrmModule.forFeature([Fuel])],
  controllers: [TypesController],
  providers: [TypesService]
})
export class TypesModule {}
