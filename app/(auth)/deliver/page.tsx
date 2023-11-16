import DeliverCard from './_components/DeliverCard'
import UploadCard from './_components/UploadCard'
import { getPets } from '@/actions/pet'
import Image from 'next/image'

async function DeliverPage() {
  const pets = await getPets()
  console.log(pets)
  return (
    <div className="flex gap-3 px-[87px] pt-[30px]  ">
      <UploadCard />
      {pets.map((pet) => (
        <DeliverCard key={pet.id} className="flex flex-col items-center p-3 ">
          <Image
            className="rounded-[28px]"
            width={138}
            height={132}
            src={pet.imageUrl}
            alt=""
            objectFit="cover"
          />
        </DeliverCard>
      ))}
    </div>
  )
}

export default DeliverPage
