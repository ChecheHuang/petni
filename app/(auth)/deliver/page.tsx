import PetCard from './_components/PetCard'
import UploadCard from './_components/UploadCard'
import { getPets } from '@/actions/pet'

async function DeliverPage() {
  const pets = await getPets()
  return (
    <div className="flex gap-3 px-[87px] pt-[30px]  ">
      <UploadCard />
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </div>
  )
}

export default DeliverPage
