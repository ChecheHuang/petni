'use client'

import NavItems from '@/components/NavItems'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

function AuthNavbar({
  name = 'CN',
  image,
  className,
  ...rest
}: {
  name: string
  image: string
} & React.HTMLAttributes<HTMLElement>) {
  const router = useRouter()
  return (
    <div
      className="flex h-full items-center justify-between  px-[87px]"
      {...rest}
    >
      <Button
        onClick={() => {
          signOut({ redirect: false }).then(() => {
            router.push('/')
          })
        }}
        variant="ghost"
        className="flex h-auto cursor-pointer items-center gap-[15px] text-info"
      >
        <Avatar>
          <AvatarImage src={image} alt="" />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        登出
      </Button>
      <NavItems />
    </div>
  )
}

export default AuthNavbar
