'use client'

import DeliverCard from './DeliverCard'
import { Pet } from '@prisma/client'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PetCard({
  id,
  imageUrl,
  name,
  address,
}: Pick<Pet, 'id' | 'imageUrl' | 'name' | 'address'>) {
  return (
    <DeliverCard className="flex flex-col items-center p-3 ">
      <div className=" relative flex h-[132px] w-[138px] items-center justify-center overflow-hidden rounded-[28px] bg-[#c4a888] ">
        <X className="absolute right-2 top-2 h-6 w-6 rounded-full bg-white  p-[4px] " />
        <Link href={`/deliver/${id}`}>
          <Image
            className="rounded-[20px]"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            src={imageUrl}
            alt=""
            priority
          />
        </Link>
      </div>
      <div className="mt-[7px] flex h-6 w-full items-center justify-between">
        <h2 className="font-bold">{name === null ? '尚未取名' : name}</h2>
        <Image src="/images/female.png" width={24} height={24} alt="" />
      </div>
      <div className="h-[21px] w-full truncate text-xs leading-[21px] text-gray-400">
        {address === null ? '尚未設置地址' : address}
      </div>
    </DeliverCard>
  )
}

export default PetCard
