import { IsEmail, IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  password!: string;

  @IsInt()
  @Min(1)
  roleId!: number;
}
