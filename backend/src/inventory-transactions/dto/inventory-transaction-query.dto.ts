import { PartialType } from '@nestjs/mapped-types';
import { UpdateInventoryTransactionDto } from './update-inventory-transaction.dto';

export class InventoryTransactionQueryDto extends PartialType(
  UpdateInventoryTransactionDto,
) {}
