import { petRouter } from './routers/petRouter'
import { templatePhoneRouter } from './routers/templatePhoneRouter'
import { router } from './trpc'

export const appRouter = router({
  pet: petRouter,
})

export type AppRouter = typeof appRouter
