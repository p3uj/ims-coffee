import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateMeasurementUnitDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  code!: string;
}
