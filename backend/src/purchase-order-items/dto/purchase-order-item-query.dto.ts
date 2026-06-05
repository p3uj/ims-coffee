import { PartialType } from '@nestjs/mapped-types';
import { UpdatePurchaseOrderItemDto } from './update-purchase-order-item.dto';
import { Transform } from 'class-transformer';

export class PurchaseOrderItemQueryDto extends PartialType(
  UpdatePurchaseOrderItemDto,
) {}
