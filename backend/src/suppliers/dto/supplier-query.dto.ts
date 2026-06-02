import { RecordStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

export class SupplierQueryDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  contactPerson?: string;

  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  address?: string;

  @IsEnum(RecordStatus)
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  recordStatus?: RecordStatus;
}
