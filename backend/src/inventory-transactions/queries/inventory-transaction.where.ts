import { Prisma } from '@prisma/client';
import { InventoryTransactionQueryDto } from '../dto/inventory-transaction-query.dto';

export const inventoryTransactionWhere = (
  query: InventoryTransactionQueryDto,
): Prisma.InventoryTransactionWhereInput => ({
  ...(query.transactionType && {
    transactionType: query.transactionType,
  }),

  ...(query.referenceType && {
    referenceType: query.referenceType,
  }),

  ...(query.quantity && {
    quantity: {
      gte: query.quantity,
    },
  }),

  ...(query.notes && {
    notes: {
      contains: query.notes,
      mode: 'insensitive',
    },
  }),

  ...(query.recordStatus && {
    recordStatus: query.recordStatus,
  }),
});
