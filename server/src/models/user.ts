import { Prisma, User } from '@prisma/client';
import prisma from '../lib/prisma';

export const createUser = (data: Prisma.UserCreateInput) => {
  return prisma.user.create({ data });
};

export const findUniqueUserByLiffIdToken = (
  uid: string
): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      uid,
    },
  });
};
