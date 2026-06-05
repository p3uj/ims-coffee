import { Prisma } from '@prisma/client';
import { ingredientBasicSelect } from 'src/ingredients/queries/ingredient.select';
import { userBasicSelect } from 'src/users/queries/user.select';

export const inventoryTransactionSelect = {
  id: true,
  referenceId: true,
  transactionType: true,
  referenceType: true,
  quantity: true,
  notes: true,
  recordStatus: true,
  createdAt: true,
  updatedAt: true,

  ingredient: {
    select: ingredientBasicSelect,
  },

  creator: {
    select: userBasicSelect,
  },
} satisfies Prisma.InventoryTransactionSelect;
