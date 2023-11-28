'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import NavItems from '@/components/NavItems'
import { FillImage } from '@/components/fill-image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-10  bg-[#FFFFFF] shadow-[0px_1px_9px_0px_#2626260D] ',
          className,
        )}
      >
        <MaxWidthWrapper className="h-[77.53px]">
          <div className="flex h-full  items-center justify-between px-[87px]">
            <Link className=" h-[53.53px] w-[118.11px]  " href="/">
              <FillImage src="/images/logo.png" alt="logo" priority />
            </Link>
            <NavItems />
          </div>
        </MaxWidthWrapper>
      </header>
    </>
  )
}

export default Navbar
