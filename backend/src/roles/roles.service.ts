import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.databaseService.role.create({
      data: createRoleDto,
    });
  }

  async findAll() {
    return this.databaseService.role.findMany();
  }

  async findOne(id: number) {
    const role = await this.databaseService.role.findUnique({
      where: {
        id,
      },
    });

    if (!role) throw new NotFoundException('Role not found');

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.databaseService.role.findUnique({
      where: {
        id,
      },
    });

    if (!role) throw new NotFoundException('Role not found');

    if (updateRoleDto.name) {
      const normalizedName = updateRoleDto.name.toUpperCase();

      const existingRoleName = await this.databaseService.role.findUnique({
        where: {
          name: normalizedName,
        },
      });

      if (existingRoleName) throw new ConflictException('Role already exists');
    }

    return this.databaseService.role.update({
      where: {
        id,
      },
      data: updateRoleDto,
    });
  }

  async remove(id: number) {
    const role = await this.databaseService.role.findUnique({
      where: {
        id,
      },
    });

    if (!role) throw new NotFoundException('Role not found');

    return this.databaseService.role.delete({
      where: {
        id,
      },
    });
  }
}
