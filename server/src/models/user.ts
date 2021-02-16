import { Prisma } from '@prisma/client';
import prisma from '../lib/prisma';

export const createUser = (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const findUniqueUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const findUniqueUserByTwitterId = (twitterId: string) => {
  return prisma.user.findUnique({
    where: {
      twitterId,
    },
  });
};
