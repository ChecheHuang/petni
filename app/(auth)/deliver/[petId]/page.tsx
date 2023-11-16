import { getPet } from '@/actions/pet'
import React from 'react'

async function PetIdPage({ params: { petId } }: { params: { petId: string } }) {
  const pet = await getPet(petId)
  console.log(pet)

  return <div>{petId}</div>
}

export default PetIdPage
