import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

function BottomArea() {
  return (
    <div className=" flex h-[120px] items-center justify-around">
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default BottomArea

function Item() {
  return (
    <div className=" flex h-[70px] w-[247px] cursor-pointer gap-[11px] rounded-[23px] bg-[#FFFFFF] p-[12px] shadow-[0px_2px_7px_0px_#0A0A0A12]">
      <Avatar>
        <AvatarImage src="/images/main/avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <div className="flex h-1/2 items-center gap-1 font-bold ">
          157763
          <Image src="/images/main/F.png" width={24} height={24} alt="alt" />
        </div>
        <div className="flex h-1/2 items-center  text-xs text-[#878787]">
          台南市南區
        </div>
      </div>
    </div>
  )
}
