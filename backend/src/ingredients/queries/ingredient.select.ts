import { Prisma } from '@prisma/client';

export const ingredientSelect = {
  id: true,
  name: true,
  currentStock: true,
  reorderLevel: true,
  recordStatus: true,
  createdAt: true,
  updatedAt: true,
  measurementUnit: true,
} satisfies Prisma.IngredientSelect;

export const ingredientBasicSelect = {
  id: true,
  name: true,

  measurementUnit: true,
} satisfies Prisma.IngredientSelect;
