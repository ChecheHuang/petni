import AgeCard from './_components/AgeCard'
import CategoryGenderCard from './_components/CategoryGenderCard'
import ContactCard from './_components/ContactCard'
import DescriptionCard from './_components/DescriptionCard'
import ImageCard from './_components/ImageCard'
import NameCard from './_components/NameCard'
import SettingForm from './_components/SettingForm'
import { getPet } from '@/app/(auth)/deliver/_actions/pet'
import { Button } from '@/components/ui/button'
import React from 'react'

async function PetIdPage({ params: { petId } }: { params: { petId: string } }) {
  const pet = await getPet(petId)
  const { imageUrl, ...rest } = pet

  return (
    <div className="mt-[13px] flex h-[calc(100vh-77.53px)] justify-center gap-[13px] ">
      <ImageCard petId={petId} imageUrl={imageUrl} />
      <div className="flex gap-[13px] ">
        {/* <div className="space-y-3">
          <CategoryGenderCard category={category} gender={gender} />
          <AgeCard age={age} />
          <NameCard name={name} />
        </div>
        <div className="space-y-3">
          <ContactCard phone={phone} city={city} area={area} />
          <DescriptionCard description={description} />
          <Button className="w-full">發布</Button>
        </div> */}
      </div>
      <SettingForm {...rest} />
    </div>
  )
}

export default PetIdPage
