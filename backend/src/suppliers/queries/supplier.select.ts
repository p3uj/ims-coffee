import { Prisma } from '@prisma/client';

export const supplierBasicSelect = {
  name: true,
  email: true,
} satisfies Prisma.SupplierSelect;
