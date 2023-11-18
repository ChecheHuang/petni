import ImageCard from './_components/ImageCard'
import SettingForm from './_components/SettingForm'
import { getPet } from '@/app/(auth)/deliver/_actions/pet'
import React from 'react'

async function PetIdPage({ params: { petId } }: { params: { petId: string } }) {
  const pet = await getPet(petId)
  const { imageUrl, ...initData } = pet

  return (
    <div className="flex h-[calc(100vh-77.53px)] justify-center gap-[13px] pt-[13px] ">
      <ImageCard petId={petId} imageUrl={imageUrl} />
      <SettingForm petId={petId} initData={initData} />
    </div>
  )
}

export default PetIdPage
