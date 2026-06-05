import { Prisma } from '@prisma/client';
import { ingredientBasicSelect } from 'src/ingredients/queries/ingredient.select';

export const purchaseOrderItemSelect = {
  id: true,
  purchaseOrderId: true,
  quantity: true,
  unitCost: true,
  recordStatus: true,
  createdAt: true,
  updatedAt: true,

  ingredient: {
    select: ingredientBasicSelect,
  },
} satisfies Prisma.PurchaseOrderItemSelect;
