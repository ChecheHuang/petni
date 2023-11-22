import { getAnimalHospitalList } from './_action/animalHospital'
import AnimalHospitalList from './_components/AnimalHospitalList'
import { Demo } from './_components/Demo'
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
      <Demo />
      {/* <AnimalHospitalList animalHospitalList={animalHospitalList} /> */}
    </div>
  )
}

export default EmergencyPage
