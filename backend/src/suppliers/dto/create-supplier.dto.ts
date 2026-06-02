import { RecordStatus } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  contactPerson?: string;

  @IsNotEmpty()
  phoneNumber!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  address!: string;

  @IsEnum(RecordStatus)
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  recordStatus?: RecordStatus;
}
