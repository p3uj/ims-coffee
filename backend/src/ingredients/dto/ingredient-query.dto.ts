import { RecordStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class IngredientQueryDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  currentStock?: number;

  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  reorderLevel?: number;

  @IsOptional()
  @IsEnum(RecordStatus)
  @Transform(({ value }) => value.toUpperCase())
  recordStatus?: RecordStatus;
}
