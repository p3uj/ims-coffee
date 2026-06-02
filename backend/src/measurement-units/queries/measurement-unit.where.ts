import { Prisma } from '@prisma/client';
import { MeasurementUnitQueryDto } from '../dto/measurement-unit-query.dto';

export const measurementUnitWhere = (
  query: MeasurementUnitQueryDto,
): Prisma.MeasurementUnitWhereInput => ({
  ...(query.name && {
    name: {
      contains: query.name,
      mode: 'insensitive',
    },
  }),

  ...(query.code && {
    code: {
      contains: query.code,
      mode: 'insensitive',
    },
  }),
});
