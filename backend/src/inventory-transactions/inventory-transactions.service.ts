import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInventoryTransactionDto } from './dto/create-inventory-transaction.dto';
import { UpdateInventoryTransactionDto } from './dto/update-inventory-transaction.dto';
import { DatabaseService } from 'src/database/database.service';
import { InventoryTransactionQueryDto } from './dto/inventory-transaction-query.dto';
import { inventoryTransactionWhere } from './queries/inventory-transaction.where';
import { inventoryTransactionSelect } from './queries/inventory-transaction.select';

@Injectable()
export class InventoryTransactionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createInventoryTransactionDto: CreateInventoryTransactionDto) {
    return this.databaseService.inventoryTransaction.create({
      data: createInventoryTransactionDto,
      select: inventoryTransactionSelect,
    });
  }

  async findAll(query: InventoryTransactionQueryDto) {
    return this.databaseService.inventoryTransaction.findMany({
      where: inventoryTransactionWhere(query),
      select: inventoryTransactionSelect,
    });
  }

  async findOne(id: number) {
    const existingInventoryTrans =
      await this.databaseService.inventoryTransaction.findUnique({
        where: {
          id,
        },
        select: inventoryTransactionSelect,
      });

    if (!existingInventoryTrans)
      throw new NotFoundException('Inventory transaction not found');

    return existingInventoryTrans;
  }

  async update(
    id: number,
    updateInventoryTransactionDto: UpdateInventoryTransactionDto,
  ) {
    return this.databaseService.inventoryTransaction.update({
      where: {
        id,
      },
      data: updateInventoryTransactionDto,
      select: inventoryTransactionSelect,
    });
  }
}
