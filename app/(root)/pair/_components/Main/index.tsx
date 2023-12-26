'use client'

import { MobileSidebar } from '../MobileSidebar'
import { useFilterPet } from '../Sidebar'
import BottomArea from './BottomArea'
import DropCardArea from './DropCardArea'
import SimpleBar from '@/components/SimpleBar'
import Loading from '@/components/loading'
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query'
import trpcClient from '@/lib/trpc/trpcClient'
import React, { useState } from 'react'

function Main({ userId }: { userId?: string }) {
  const { settingData } = useFilterPet()
  const [currentShowId, setCurrentShowId] = useState('')
  const { data, isLoading, fetchNextPage } =
    trpcClient.pet.getPairPets.useInfiniteQuery(
      {
        limit: INFINITE_QUERY_LIMIT,
      },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        keepPreviousData: true,
      },
    )
  const pairPets = data?.pages.flatMap((page) => page.pairPets) || []

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
        <DropCardArea
          setCurrentShowId={setCurrentShowId}
          fetchNextPage={fetchNextPage}
          pairPets={pairPets}
        />
        <BottomArea pairPets={pairPets} currentShowId={currentShowId} />
      </SimpleBar>
    </div>
  )
}

export default Main
