import { RecordStatus } from '@prisma/client';
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
  recordStatus?: RecordStatus;
}
