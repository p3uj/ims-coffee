import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { userSelect } from './queries/user.select';
import { userWhere } from './queries/user.where';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.databaseService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    const existingRole = await this.databaseService.role.findUnique({
      where: {
        id: createUserDto.roleId,
      },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    if (!existingRole) {
      throw new NotFoundException('Role not found');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const { roleId, ...rest } = createUserDto;

    // Create User Account
    const user = await this.databaseService.user.create({
      data: {
        ...rest,
        password: hashedPassword,

        role: {
          connect: {
            id: createUserDto.roleId,
          },
        },
      },

      // Payload Response
      select: userSelect,
    });

    return user;
  }

  async findAll(role?: string, isActive?: boolean) {
    return this.databaseService.user.findMany({
      where: userWhere(role, isActive),
      select: userSelect,
    });
  }

  async findOne(id: number) {
    const existingUser = await this.databaseService.user.findUnique({
      where: {
        id,
      },
      select: userSelect,
    });

    if (!existingUser) throw new NotFoundException('User not found');

    return existingUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });

    if (!existingUser) throw new NotFoundException('User not found');

    return this.databaseService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
      select: userSelect,
    });
  }
}
