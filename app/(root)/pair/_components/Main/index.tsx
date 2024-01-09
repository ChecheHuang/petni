'use client'

import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

import SimpleBar from '@/components/SimpleBar'
import Loading from '@/components/loading'
import { trpcClient, trpcQuery } from '@/components/providers/trpcProvider'
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query'
import { storage } from '@/lib/storage'

import { MobileSidebar } from '../MobileSidebar'
import { useFilterPet } from '../Sidebar'
import BottomArea from './BottomArea'
import DropCardArea from './DropCardArea'

function Main({ userId }: { userId?: string }) {
  const { settingData } = useFilterPet()
  const isLogin = useSession().status === 'authenticated'
  const [isCreateFromStorageLoading, setIsCreateFromStorageLoading] =
    useState(false)

  const [currentShowId, setCurrentShowId] = useState('')
  const { data, isLoading, fetchNextPage } =
    trpcQuery.pet.getPairPets.useInfiniteQuery(
      {
        limit: INFINITE_QUERY_LIMIT,
      },
      {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        keepPreviousData: true,
      },
    )
  const pairPets = data?.pages.flatMap((page) => page.pairPets) || []

  useEffect(() => {
    if (!isLogin) return
    ;(async () => {
      if (!storage.get('collections')) return

      setIsCreateFromStorageLoading(true)
      const collections: { petId: string; isLike: boolean }[] =
        storage.get('collections') || []

      await Promise.all(
        collections.map(async (item) => {
          trpcClient.collection.createCollection.mutate(item)
        }),
      )
      storage.remove('collections')
      setIsCreateFromStorageLoading(false)
    })()
  }, [isLogin])

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
