import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { DatabaseService } from 'src/database/database.service';
import { SupplierQueryDto } from './dto/supplier-query.dto';
import { suppplierWhere } from './queries/supplier.where';

@Injectable()
export class SuppliersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSupplierDto: CreateSupplierDto) {
    const existingSupplierEmail =
      await this.databaseService.supplier.findUnique({
        where: {
          email: createSupplierDto.email,
        },
      });

    if (existingSupplierEmail)
      throw new ConflictException('Supplier email already exists');

    return this.databaseService.supplier.create({
      data: createSupplierDto,
    });
  }

  async findAll(query: SupplierQueryDto) {
    return this.databaseService.supplier.findMany({
      where: suppplierWhere(query),
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  async remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
