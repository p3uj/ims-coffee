import { IsOptional } from 'class-validator';

export class MeasurementUnitQueryDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  code?: string;
}
