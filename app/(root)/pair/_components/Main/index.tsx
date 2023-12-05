'use client'

import { MobileSidebar } from '../MobileSidebar'
import { useFilterPet } from '../Sidebar'
import BottomArea from './BottomArea'
import DropCardArea from './DropCardArea'
import SimpleBar from '@/components/SimpleBar'
import Loading from '@/components/loading'
import trpcClient from '@/lib/trpc/trpcClient'
import React from 'react'

function Main() {
  const { data } = useFilterPet()
  const { data: pairPets = [], isLoading } =
    trpcClient.pet.getPairPets.useQuery()
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    )
  return (
    <div className=" item-center flex h-[calc(100vh-77.53px)] w-screen flex-col  justify-center   md:w-[867px] ">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <SimpleBar>
        <DropCardArea pairPets={pairPets} />
        <BottomArea />
      </SimpleBar>
    </div>
  )
}

export default Main
