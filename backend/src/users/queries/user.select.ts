import { Prisma } from '@prisma/client';

export const userSelect = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  isActive: true,
  createdAt: true,
  updatedAt: true,

  role: true,
} satisfies Prisma.UserSelect;

export const userBasicSelect = {
  firstName: true,
  lastName: true,

  role: {
    select: {
      name: true,
    },
  },
} satisfies Prisma.UserSelect;
