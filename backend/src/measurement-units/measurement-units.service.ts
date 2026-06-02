import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMeasurementUnitDto } from './dto/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from './dto/update-measurement-unit.dto';
import { DatabaseService } from 'src/database/database.service';
import { MeasurementUnitQueryDto } from './dto/measurement-unit-query.dto';
import { measurementUnitWhere } from './queries/measurement-unit.where';

@Injectable()
export class MeasurementUnitsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMeasurementUnitDto: CreateMeasurementUnitDto) {
    const existingMeasurementUnit =
      await this.databaseService.measurementUnit.findUnique({
        where: {
          code: createMeasurementUnitDto.code,
        },
      });

    if (existingMeasurementUnit)
      throw new ConflictException('Measurement unit already exist');

    return this.databaseService.measurementUnit.create({
      data: createMeasurementUnitDto,
    });
  }

  async findAll(query: MeasurementUnitQueryDto) {
    return this.databaseService.measurementUnit.findMany({
      where: measurementUnitWhere(query),
    });
  }

  async findOne(id: number) {
    const existingMeasurementUnit =
      await this.databaseService.measurementUnit.findUnique({
        where: {
          id,
        },
      });

    if (!existingMeasurementUnit)
      throw new NotFoundException('Measurement unit not found');

    return existingMeasurementUnit;
  }

  async update(id: number, updateMeasurementUnitDto: UpdateMeasurementUnitDto) {
    const existingMeasurementUnit =
      await this.databaseService.measurementUnit.findUnique({
        where: {
          id,
        },
      });

    if (!existingMeasurementUnit)
      throw new NotFoundException('Measurement unit not found');

    return this.databaseService.measurementUnit.update({
      where: {
        id,
      },
      data: updateMeasurementUnitDto,
    });
  }
}
