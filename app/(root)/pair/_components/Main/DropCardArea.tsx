import Card from './Card'
import CardContainer from './CardContainer'
import { PairPetsType } from '@/types/pairPets'
import React from 'react'

function DropCardArea({
  pairPets,
  fetchNextPage,
}: {
  pairPets: PairPetsType
  fetchNextPage: () => void
}) {
  return (
    <CardContainer>
      {pairPets.toReversed().map((pet, index) => {
        return (
          <Card
            key={pet.id}
            fetchNextPage={index === 1 ? fetchNextPage : undefined}
            index={index}
            {...pet}
          />
        )
      })}
    </CardContainer>
  )
}

export default DropCardArea
