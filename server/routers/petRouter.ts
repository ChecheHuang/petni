import { router, publicProcedure, privateProcedure } from '../trpc'
import prismadb from '@/lib/prismadb'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const petRouter = router({
  createNewPet: privateProcedure
    .input(z.object({ imageUrl: z.string() }))
    .mutation(async ({ input: { imageUrl }, ctx: { userId } }) => {
      const { id } = await prismadb.pet.create({
        data: {
          userId,
          imageUrl,
        },
      })
      revalidatePath('/deliver')
      return id
    }),
})
