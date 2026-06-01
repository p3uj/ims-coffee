import { Prisma, RecordStatus } from '@prisma/client';
import { SupplierQueryDto } from '../dto/supplier-query.dto';

export const suppplierWhere = (
  query: SupplierQueryDto,
): Prisma.SupplierWhereInput => ({
  ...(query.name && {
    name: {
      contains: query.name,
      mode: 'insensitive',
    },
  }),

  ...(query.contactPerson && {
    contactPerson: {
      contains: query.contactPerson,
      mode: 'insensitive',
    },
  }),

  ...(query.phoneNumber && {
    phoneNumber: {
      contains: query.phoneNumber,
      mode: 'insensitive',
    },
  }),

  ...(query.email && {
    email: {
      contains: query.email,
      mode: 'insensitive',
    },
  }),

  ...(query.address && {
    address: {
      contains: query.address,
      mode: 'insensitive',
    },
  }),

  ...(query.recordStatus && {
    recordStatus: query.recordStatus,
  }),
});
