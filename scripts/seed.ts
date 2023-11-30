import { seedAnimalHospital } from './model/animalHospital'
import { seedUser } from './model/user'
import { PrismaClient } from '@prisma/client'

const prismadb = new PrismaClient()

const reset = async () => {
  await prismadb['user'].deleteMany()
  await prismadb['animalHospital'].deleteMany()
  await prismadb['pet'].deleteMany()
  await prismadb['theme'].deleteMany()
}
const seed = async () => {
  await seedUser()
  await seedAnimalHospital()
}

async function main() {
  try {
    await reset()
    await seed()
    console.log('Success')
  } catch (error) {
    console.log('Error seeding the database ', error)
  } finally {
    await prismadb.$disconnect()
  }
}

main()
