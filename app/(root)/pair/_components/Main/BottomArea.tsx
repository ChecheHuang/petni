import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import React from 'react'

function BottomArea({
  pairPets,
}: {
  pairPets: { id: string; imageUrl: string; name: string; gender: string }[]
}) {
  console.log(pairPets)
  return (
    <div className="hidden h-[120px] items-center justify-around md:flex">
      {pairPets.map(({ id, imageUrl, name, gender }, index) => {
        if (index > 2) return null
        return (
          <div
            key={id}
            className=" flex h-[70px] w-[247px] cursor-pointer gap-[11px] rounded-[23px] bg-[#FFFFFF] p-[12px] shadow-[0px_2px_7px_0px_#0A0A0A12]"
          >
            <Avatar>
              <AvatarImage src={imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex h-1/2 items-center gap-1 font-bold ">
                {name}
                <Image
                  src={
                    gender === '男生'
                      ? '/images/icons/male.png'
                      : '/images/icons/female.png'
                  }
                  width={24}
                  height={24}
                  alt="alt"
                />
              </div>
              <div className="flex h-1/2 items-center  text-xs text-[#878787]">
                台南市南區
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BottomArea
