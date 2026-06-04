import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { DatabaseService } from 'src/database/database.service';
import { PurchaseOrderQueryDto } from './dto/purchase-order-query.dto';
import { purchaseOrderWhere } from './queries/purchase-order.where';
import { purchaseOrderSelect } from './queries/purchase-order.select';

@Injectable()
export class PurchaseOrdersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.databaseService.purchaseOrder.create({
      data: createPurchaseOrderDto,
      select: purchaseOrderSelect,
    });
  }

  async findAll(query: PurchaseOrderQueryDto) {
    return this.databaseService.purchaseOrder.findMany({
      where: purchaseOrderWhere(query),
      select: purchaseOrderSelect,
    });
  }

  async findOne(id: number) {
    const existingPurchaseOrder =
      await this.databaseService.purchaseOrder.findUnique({
        where: {
          id,
        },
        select: purchaseOrderSelect,
      });

    if (!existingPurchaseOrder)
      throw new NotFoundException('Purchase order not found');

    return existingPurchaseOrder;
  }

  async update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    const existingPurchaseOrder =
      await this.databaseService.purchaseOrder.findUnique({
        where: {
          id,
        },
      });

    if (!existingPurchaseOrder)
      throw new NotFoundException('Purchase order not found');

    return this.databaseService.purchaseOrder.update({
      where: {
        id,
      },
      data: updatePurchaseOrderDto,
      select: purchaseOrderSelect,
    });
  }
}
