import { Prisma } from '@prisma/client';
import { IngredientQueryDto } from '../dto/ingredient-query.dto';

export const ingredientWhere = (
  query: IngredientQueryDto,
): Prisma.IngredientWhereInput => ({
  ...(query.name && {
    name: {
      contains: query.name,
      mode: 'insensitive',
    },
  }),

  ...(query.currentStock && {
    currentStock: {
      gte: query.currentStock,
    },
  }),

  ...(query.reorderLevel && {
    reorderLevel: {
      gte: query.reorderLevel,
    },
  }),

  ...(query.recordStatus && {
    recordStatus: query.recordStatus,
  }),
});
