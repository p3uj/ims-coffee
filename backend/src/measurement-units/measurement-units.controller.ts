import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { MeasurementUnitsService } from './measurement-units.service';
import { CreateMeasurementUnitDto } from './dto/create-measurement-unit.dto';
import { UpdateMeasurementUnitDto } from './dto/update-measurement-unit.dto';
import { MeasurementUnitQueryDto } from './dto/measurement-unit-query.dto';

@Controller('measurement-units')
export class MeasurementUnitsController {
  constructor(
    private readonly measurementUnitsService: MeasurementUnitsService,
  ) {}

  @Post()
  create(@Body() createMeasurementUnitDto: CreateMeasurementUnitDto) {
    return this.measurementUnitsService.create(createMeasurementUnitDto);
  }

  @Get()
  findAll(@Query() query: MeasurementUnitQueryDto) {
    return this.measurementUnitsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.measurementUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMeasurementUnitDto: UpdateMeasurementUnitDto,
  ) {
    return this.measurementUnitsService.update(+id, updateMeasurementUnitDto);
  }
}
