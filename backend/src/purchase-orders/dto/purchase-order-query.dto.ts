import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderDto } from './create-purchase-order.dto';

export class PurchaseOrderQueryDto extends PartialType(
  CreatePurchaseOrderDto,
) {}
