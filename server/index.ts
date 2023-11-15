import { animalRouter } from './routers/animalRouter'
import { templatePhoneRouter } from './routers/templatePhoneRouter'
import { router } from './trpc'

export const appRouter = router({
  animal: animalRouter,
})

export type AppRouter = typeof appRouter
