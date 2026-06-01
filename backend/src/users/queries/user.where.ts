import { Prisma } from '@prisma/client';

export const userWhere = (
  role?: string,
  isActive?: boolean,
): Prisma.UserWhereInput => ({
  ...(role && {
    role: {
      name: role,
    },
  }),

  ...(typeof isActive === 'boolean' && {
    isActive,
  }),
});
