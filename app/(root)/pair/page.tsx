import Main from './_components/Main'
import { MobileSidebar } from './_components/MobileSidebar'
import Sidebar from './_components/Sidebar'
import React from 'react'

function Home() {
  return (
    <>
      <div className="flex flex-wrap">
        <Sidebar className="hidden md:flex md:h-[calc(100vh-77.53px)]  md:w-[413px] md:pl-[87px]" />
        <MobileSidebar />
        <Main />
      </div>
    </>
  )
}

export default Home
