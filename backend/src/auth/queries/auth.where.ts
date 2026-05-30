import { Prisma } from '@prisma/client';

export const userWhere = (role?: string): Prisma.UserWhereInput => ({
  ...(role && {
    role: {
      name: role,
    },
  }),
});
