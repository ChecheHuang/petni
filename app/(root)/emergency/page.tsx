import { getAnimalHospitalList } from './_action/animalHospital'
import AnimalHospitalList from './_components/AnimalHospitalList'
import SelectButtons from './_components/SelectButtons'
import SimpleBar from '@/components/SimpleBar'

interface EmergencyPageProps {
  searchParams: {
    area: string
  }
}

async function EmergencyPage({ searchParams: { area } }: EmergencyPageProps) {
  const animalHospitalList = await getAnimalHospitalList(area)

  return (
    <div>
      <SelectButtons />
      <AnimalHospitalList animalHospitalList={animalHospitalList} />
    </div>
  )
}

export default EmergencyPage
