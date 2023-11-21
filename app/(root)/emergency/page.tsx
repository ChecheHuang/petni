import { getAnimalHospitalList } from './_action/animalHospital'
import SelectButtons from './_components/SelectButtons'

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
      {animalHospitalList.length}
    </div>
  )
}

export default EmergencyPage
