import prismadb from '@/lib/prismadb'

export const getAnimalHospitalList = async (area: string) => {
  const animalHospitals = await prismadb.animalHospital.findMany({
    where: {
      area,
    },
  })
  return animalHospitals
}
