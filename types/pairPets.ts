import { type AppRouter } from '@/server'
import { inferRouterOutputs } from '@trpc/server'

type RouterOutput = inferRouterOutputs<AppRouter>

export type PairPetsType = RouterOutput['pet']['getPairPets']
