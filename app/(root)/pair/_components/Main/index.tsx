'use client'

import { MobileSidebar } from '../MobileSidebar'
import { useFilterPet } from '../Sidebar'
import BottomArea from './BottomArea'
import DropCardArea from './DropCardArea'
import SimpleBar from '@/components/SimpleBar'
import React from 'react'

function Main() {
  const { data } = useFilterPet()
  return (
    <div className=" item-center flex h-[calc(100vh-77.53px)] w-screen flex-col  justify-center   md:w-[867px] ">
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <SimpleBar>
        <DropCardArea />
        <BottomArea />
      </SimpleBar>
    </div>
  )
}

export default Main
