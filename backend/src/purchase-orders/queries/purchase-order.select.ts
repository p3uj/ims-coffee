import { Prisma } from '@prisma/client';
import { supplierBasicSelect } from 'src/suppliers/queries/supplier.select';
import { userBasicSelect } from 'src/users/queries/user.select';

export const purchaseOrderSelect = {
  id: true,
  status: true,
  orderDate: true,
  receivedDate: true,
  recordStatus: true,
  createdAt: true,
  updatedAt: true,

  supplier: {
    select: supplierBasicSelect,
  },

  creator: {
    select: userBasicSelect,
  },

  purchaseOrderItems: true,
} satisfies Prisma.PurchaseOrderSelect;
