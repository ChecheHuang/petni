'use client'

import { useFilterPet } from '../Sidebar'
import BottomArea from './BottomArea'
import DropCardArea from './DropCardArea'
import SimpleBar from '@/components/SimpleBar'
import React from 'react'

function Main() {
  const { data } = useFilterPet()
  return (
    <div className=" flex h-[calc(100vh-77.53px)] max-h-[calc(720px-77.53px)] w-[867px]   flex-col ">
      <SimpleBar>
        <DropCardArea />
        <BottomArea />
      </SimpleBar>
    </div>
  )
}

export default Main
