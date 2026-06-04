import { Prisma } from '@prisma/client';
import { PurchaseOrderQueryDto } from '../dto/purchase-order-query.dto';

export const purchaseOrderWhere = (
  query: PurchaseOrderQueryDto,
): Prisma.PurchaseOrderWhereInput => ({
  ...(query.status && {
    status: query.status,
  }),

  ...(query.orderDate && {
    orderDate: {
      gte: new Date(query.orderDate),
    },
  }),

  ...(query.receivedDate && {
    receivedDate: {
      gte: new Date(query.receivedDate),
    },
  }),

  ...(query.recordStatus && {
    recordStatus: query.recordStatus,
  }),
});
