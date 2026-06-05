import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderItemDto } from './create-purchase-order-item.dto';
import { RecordStatus } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePurchaseOrderItemDto extends PartialType(
  CreatePurchaseOrderItemDto,
) {
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(RecordStatus)
  recordStatus?: RecordStatus;
}
