import { Prisma } from '@prisma/client';

export const userSelect = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  createdAt: true,
  updatedAt: true,
  role: true,
} satisfies Prisma.UserSelect;
