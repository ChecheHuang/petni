import { collectionRouter } from './routers/collectionRouter'
import { petRouter } from './routers/petRouter'
import { router } from './trpc'
import { inferRouterOutputs, inferRouterInputs } from '@trpc/server'

export const appRouter = router({
  pet: petRouter,
  collection: collectionRouter,
})

export type AppRouter = typeof appRouter
export type TrpcOutputs = inferRouterOutputs<AppRouter>
export type TrpcInputs = inferRouterInputs<AppRouter>
