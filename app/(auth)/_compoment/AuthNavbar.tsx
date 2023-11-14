'use client'

import NavItems from '@/components/NavItems'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

function AuthNavbar({
  image,
  className,
  ...rest
}: {
  image: string
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className="flex h-full items-center justify-between  px-[87px]"
      {...rest}
    >
      <Button
        onClick={() =>
          signOut({
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }
        variant="ghost"
        className="flex h-auto cursor-pointer items-center gap-[15px] text-info"
      >
        <Avatar>
          <AvatarImage src={image} alt="" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        登出
      </Button>
      <NavItems />
    </div>
  )
}

export default AuthNavbar
