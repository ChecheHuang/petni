import NavItems from '@/components/NavItems'
import { cn } from '@/lib/utils'
import React from 'react'

function MobileNavbar({ className }: { className?: string }) {
  return (
    <header className=" fixed bottom-0 flex h-[56px] w-full items-center bg-white px-4  md:hidden ">
      <NavItems />
    </header>
  )
}

export default MobileNavbar
