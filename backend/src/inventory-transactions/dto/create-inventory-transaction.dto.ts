import { ReferenceType, TransactionType } from '@prisma/client';
import { Transform, Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateInventoryTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  ingredientId!: number;

  @IsNotEmpty()
  @IsNumber()
  createdBy!: number;

  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(TransactionType)
  transactionType!: TransactionType;

  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(ReferenceType)
  referenceType!: ReferenceType;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantity!: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  referenceId?: number;

  @IsOptional()
  notes?: string;
}
