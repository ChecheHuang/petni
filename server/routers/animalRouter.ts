import { router, publicProcedure, privateProcedure } from '../trpc'
import prismadb from '@/lib/prismadb'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export const animalRouter = router({
  createAnimal: publicProcedure
    .input(z.number())
    .mutation(async ({ input: id }) => {
      revalidatePath('/administrator/cati/manager')
    }),
})
