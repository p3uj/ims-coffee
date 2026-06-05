import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryTransactionDto } from './create-inventory-transaction.dto';
import { RecordStatus } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateInventoryTransactionDto extends PartialType(
  CreateInventoryTransactionDto,
) {
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  @IsEnum(RecordStatus)
  recordStatus?: RecordStatus;
}
