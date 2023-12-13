import Card from './Card'
import CardContainer from './CardContainer'
import { PairPetsType } from '@/types/pairPets'
import React from 'react'

function DropCardArea({
  pairPets,
  fetchNextPage,
  setCurrentCardIndex,
}: {
  pairPets: PairPetsType
  fetchNextPage: () => void
  setCurrentCardIndex: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <CardContainer>
      {pairPets.map((pet, index) => {
        return (
          <Card
            key={pet.id}
            fetchNextPage={index === 1 ? fetchNextPage : undefined}
            remove = {() => {
              
            }}
            index={index}
            {...pet}
          />
        )
      })}
    </CardContainer>
  )
}

export default DropCardArea
