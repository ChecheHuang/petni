import { PrismaClient } from '@prisma/client'

const prismadb = new PrismaClient()

const reset = async () => {
  await prismadb.pet.deleteMany()
}

async function main() {
  try {
    await reset()

    console.log('Success')
  } catch (error) {
    console.log('Error seeding the database categories', error)
  } finally {
    await prismadb.$disconnect()
  }
}

main()
