import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt';
import { userSelect } from './queries/auth.select';
import { userWhere } from './queries/auth.where';

@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAuthDto: CreateAuthDto) {
    const existingUser = await this.databaseService.user.findUnique({
      where: {
        email: createAuthDto.email,
      },
    });

    const existingRole = await this.databaseService.role.findUnique({
      where: {
        id: createAuthDto.roleId,
      },
    });

    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    if (!existingRole) {
      throw new NotFoundException('Role not found');
    }

    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);
    const { roleId, ...rest } = createAuthDto;

    // Create User Account
    const user = await this.databaseService.user.create({
      data: {
        ...rest,
        password: hashedPassword,

        role: {
          connect: {
            id: createAuthDto.roleId,
          },
        },
      },

      // Payload Response
      select: userSelect,
    });

    return user;
  }

  async findAll(role?: string) {
    return this.databaseService.user.findMany({
      where: userWhere(role),
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

  async update(id: number, updateAuthDto: UpdateAuthDto) {
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
      data: updateAuthDto,
      select: userSelect,
    });
  }

  async remove(id: number) {
    const existingUser = await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });

    if (!existingUser) throw new NotFoundException('User not found');

    try {
      await this.databaseService.user.delete({
        where: {
          id,
        },
      });

      return {
        message: 'User deleted successfully',
      };
    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException('Failed to delete user');
    }
  }
}
