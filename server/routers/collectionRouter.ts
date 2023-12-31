import { router, publicProcedure, privateProcedure } from '../trpc';
import prismadb from '@/lib/prismadb';
import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';


export const collectionRouter = router({
  createCollection: privateProcedure
    .input(z.object({ petId: z.string(), isLike: z.boolean() }))
    .mutation(async ({ input: { petId, isLike }, ctx: { userId } }) => {
      const test = await prismadb.collection.upsert({
        where: {
          userId_petId: {
            userId,
            petId,
          },
        },
        create: {
          userId,
          petId,
          isLike,
        },
        update: {
          isLike,
        },
      })
    }),
})