import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @Transform(({ value }) => value.toUpperCase())
  @IsString()
  @IsNotEmpty()
  name!: string;
}
