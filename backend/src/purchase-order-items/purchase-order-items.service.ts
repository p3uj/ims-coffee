import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseOrderItemDto } from './dto/create-purchase-order-item.dto';
import { UpdatePurchaseOrderItemDto } from './dto/update-purchase-order-item.dto';
import { DatabaseService } from 'src/database/database.service';
import { PurchaseOrderItemQueryDto } from './dto/purchase-order-item-query.dto';
import { purchaseOrderItemWhere } from './queries/purchase-order-item.where';
import { purchaseOrderItemSelect } from './queries/purchase-order-item.select';

@Injectable()
export class PurchaseOrderItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPurchaseOrderItemDto: CreatePurchaseOrderItemDto) {
    return this.databaseService.purchaseOrderItem.create({
      data: createPurchaseOrderItemDto,
      select: purchaseOrderItemSelect,
    });
  }

  async findAll(query: PurchaseOrderItemQueryDto) {
    return this.databaseService.purchaseOrderItem.findMany({
      where: purchaseOrderItemWhere(query),
      select: purchaseOrderItemSelect,
    });
  }

  async findOne(id: number) {
    const existingPurchaseOrderItem =
      await this.databaseService.purchaseOrderItem.findUnique({
        where: {
          id,
        },
        select: purchaseOrderItemSelect,
      });

    if (!existingPurchaseOrderItem)
      throw new NotFoundException('Purchase order item not found');

    return existingPurchaseOrderItem;
  }

  async update(
    id: number,
    updatePurchaseOrderItemDto: UpdatePurchaseOrderItemDto,
  ) {
    const existingPurchaseOrderItem =
      await this.databaseService.purchaseOrderItem.findUnique({
        where: {
          id,
        },
      });

    if (!existingPurchaseOrderItem)
      throw new NotFoundException('Purchase order item not found');

    return this.databaseService.purchaseOrderItem.update({
      where: {
        id,
      },
      data: updatePurchaseOrderItemDto,
      select: purchaseOrderItemSelect,
    });
  }
}
