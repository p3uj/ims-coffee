import { PurchaseOrderStatus, RecordStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePurchaseOrderDto {
  @IsNotEmpty()
  @IsNumber()
  supplierId!: number;

  @IsNotEmpty()
  @IsNumber()
  createdBy!: number;

  @IsNotEmpty()
  @IsEnum(PurchaseOrderStatus)
  @Transform(({ value }) => value.toUpperCase())
  status!: PurchaseOrderStatus;

  @IsNotEmpty()
  @IsString()
  orderDate!: string;

  @IsOptional()
  @IsString()
  receivedDate?: string;

  @IsOptional()
  @IsEnum(RecordStatus)
  @Transform(({ value }) => value.toUpperCase())
  recordStatus?: RecordStatus;
}
