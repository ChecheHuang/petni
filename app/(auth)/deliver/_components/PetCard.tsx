'use client'

import { GetPetsReturnType } from '../_actions/pet'
import DeliverCard from './DeliverCard'
import { FillImage } from '@/components/fill-image'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PetCard({ id, imageUrl, name, city, area }: GetPetsReturnType) {
  const handleDelete = async () => {
    console.log('todo delete ' + id)
  }
  return (
    <DeliverCard className="flex flex-col items-center p-3 ">
      <div className=" relative flex h-[132px] w-[138px] items-center justify-center overflow-hidden rounded-[28px] bg-[#c4a888] ">
        <X
          onClick={handleDelete}
          className="absolute right-2 top-2 h-6 w-6 rounded-full bg-white  p-[4px] "
        />
        <Link href={`/deliver/${id}`}>
          <FillImage className="rounded-[20px]" src={imageUrl} priority />
        </Link>
      </div>
      <div className="mt-[7px] flex h-6 w-full items-center justify-between">
        <h2 className="font-bold">{name === null ? '尚未取名' : name}</h2>
        <Image src="/images/female.png" width={24} height={24} alt="" />
      </div>
      <div className="h-[21px] w-full truncate text-xs leading-[21px] text-gray-400">
        {city === null ? '尚未設置地址' : city + area}
      </div>
    </DeliverCard>
  )
}

export default PetCard
