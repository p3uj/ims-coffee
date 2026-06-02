import { Module } from '@nestjs/common';
import { MeasurementUnitsService } from './measurement-units.service';
import { MeasurementUnitsController } from './measurement-units.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MeasurementUnitsController],
  providers: [MeasurementUnitsService],
})
export class MeasurementUnitsModule {}
