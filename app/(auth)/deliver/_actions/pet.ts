import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import prismadb from '@/lib/prismadb'
import { notFound } from 'next/navigation'

export const getPets = async () => {
  const session = await getUserAuth()
  if (!session) throw new Error('Unauthorized')

  const userId = session.user.id as string
  const pets = await prismadb.pet.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      city: true,
      area: true,
      gender: true,
      isPublish: true,
    },
    where: {
      userId,
    },
  })
  return pets
}
export type GetPetsReturnType = GetArrType<AsyncFnReturnType<typeof getPets>>

export const getPet = async (petId: string) => {
  const session = await getUserAuth()
  if (!session) throw new Error('Unauthorized')

  const userId = session.user.id as string

  const pet = await prismadb.pet.findUnique({
    select: {
      imageUrl: true,
      category: true,
      gender: true,
      age: true,
      name: true,
      furColor: true,
      phone: true,
      city: true,
      area: true,
      description: true,
      isPublish: true,
    },
    where: {
      id: petId,
      userId,
    },
  })
  if (!pet) return notFound()

  return pet
}
export type GetPetReturnType = AsyncFnReturnType<typeof getPet>
