import Card from './Card'
import CardContainer from './CardContainer'
import { PairPetsType } from '@/types/pairPets'
import React from 'react'

function DropCardArea({ pairPets }: { pairPets: PairPetsType }) {
  return (
    <CardContainer>
      {pairPets.map((pet, index) => {
        return <Card key={pet.id} index={index} {...pet} />
      })}
    </CardContainer>
  )
}

export default DropCardArea
