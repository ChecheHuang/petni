import Card from './Card'
import CardContainer from './CardContainer'
import { PairPetsType } from '@/types/pairPets'
import React from 'react'

function DropCardArea({
  pairPets,
  fetchNextPage,
}: {
  pairPets: PairPetsType
  fetchNextPage?: () => void
}) {
  console.log(pairPets.length)
  return (
    <CardContainer>
      {pairPets.map((pet, index) => {
        if (index === pairPets.length - 2) {
          console.log(index)
          console.log(pet.name)
          return (
            <Card
              key={pet.id}
              index={index}
              {...pet}
              fetchNextPage={fetchNextPage}
            />
          )
        }

        return <Card key={pet.id} index={index} {...pet} />
      })}
    </CardContainer>
  )
}

export default DropCardArea
