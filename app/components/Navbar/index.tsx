'use client'

import NavItem from './NavItem'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const routes = [
    {
      href: '/',
      alias: 'pair',
      label: '配對',
    },
    {
      href: '/collect',
      alias: 'collect',
      label: '收藏',
    },
    {
      href: '/theme',
      alias: 'theme',
      label: '主題館',
    },
    {
      href: '/deliver',
      alias: 'deliver',
      label: '送養',
    },
    {
      href: '/emergency',
      alias: 'emergency',
      label: '急診',
    },
  ]

  return (
    <>
      <div>
        <Image
          src="/images/header/logo.png"
          alt="logo"
          width={118.11}
          height={53.53}
          priority
        />
      </div>
      <nav className="grid w-[470px] grid-cols-5 items-center justify-items-center ">
        {routes.map((route) => (
          <NavItem key={route.alias} {...route} />
        ))}
      </nav>
    </>
  )
}

export default Navbar
