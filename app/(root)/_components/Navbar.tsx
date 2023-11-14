'use client'

import NavItems from '@/components/NavItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="flex h-full  items-center justify-between px-[87px]">
      <Link href="/">
        <Image
          src="/images/header/logo.png"
          alt="logo"
          width={118.11}
          height={53.53}
          priority
        />
      </Link>
      <NavItems />
    </div>
  )
}

export default Navbar
