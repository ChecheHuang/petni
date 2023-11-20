'use client'

import NavItems from '@/components/NavItems'
import { FillImage } from '@/components/fill-image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex h-full  items-center justify-between px-[87px]">
      <Link className="h-[53.53px] w-[118.11px] " href="/">
        <FillImage src="/images/logo.png" alt="logo" priority />
      </Link>
      <NavItems />
    </div>
  )
}

export default Navbar
