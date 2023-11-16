import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import prismadb from '@/lib/prismadb'

export const getPets = async () => {
  const pets = await prismadb.pet.findMany({
    select: {
      id: true,
      name: true,
      imageUrl: true,
    },
  })
  return pets
}

export const getPet = async (petId: string) => {
  const session = await getUserAuth()
  if (!session) throw new Error('Unauthorized')

  const userId = session.user.id as string

  const pet = await prismadb.pet.findUnique({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      category: true,
    },
    where: {
      id: petId,
      userId,
    },
  })
  if (!pet) throw new Error('Pet not found')

  return pet
}
