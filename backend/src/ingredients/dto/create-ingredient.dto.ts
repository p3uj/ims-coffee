import { RecordStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsNumber()
  measurementUnitId!: number;

  @IsNotEmpty()
  @Transform(
    ({ value }) =>
      value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase()), // Converts string to Title Case by capitalizing the first letter of each word
  ) // Normalize Name
  name!: string;

  @IsNotEmpty()
  @IsNumber()
  currentStock!: number;

  @IsNotEmpty()
  @IsNumber()
  reorderLevel!: number;

  @IsOptional()
  @IsEnum(RecordStatus)
  @Transform(({ value }) => value.toUpperCase())
  recordStatus?: RecordStatus;
}
