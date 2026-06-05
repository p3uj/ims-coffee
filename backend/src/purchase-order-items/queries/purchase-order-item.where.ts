import { Prisma } from '@prisma/client';
import { PurchaseOrderItemQueryDto } from '../dto/purchase-order-item-query.dto';

export const purchaseOrderItemWhere = (
  query: PurchaseOrderItemQueryDto,
): Prisma.PurchaseOrderItemWhereInput => ({
  ...(query.quantity && {
    quantity: {
      gte: query.quantity,
    },
  }),

  ...(query.unitCost && {
    unitCost: {
      gte: query.unitCost,
    },
  }),

  ...(query.recordStatus && {
    recordStatus: query.recordStatus,
  }),
});
