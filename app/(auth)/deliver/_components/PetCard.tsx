'use client'

import { useDeleteModal } from '../../_hooks/useDeleteModal'
import { useNavigateModal } from '../../_hooks/useNavigateModal'
import { GetPetsReturnType } from '../_actions/pet'
import DeliverCard from './DeliverCard'
import { FillImage } from '@/components/fill-image'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function PetCard({
  id,
  imageUrl,
  name,
  city,
  area,
  gender,
  isPublish,
}: GetPetsReturnType) {
  const { onOpen } = useDeleteModal()
  const { onOpen: onNavigate } = useNavigateModal()
  const handleDelete = () => {
    onOpen(id)
  }
  const handleImageClick = () => {
    onNavigate(id)
  }

  const genderPath = {
    男生: 'male',
    女生: 'female',
    不明: 'unknown',
  }

  return (
    <>
      <DeliverCard className="flex flex-col items-center p-3 ">
        <div className=" relative flex h-[132px] w-[138px] items-center justify-center overflow-hidden rounded-[28px] bg-[#c4a888] ">
          <X
            onClick={handleDelete}
            className="absolute right-2 top-2 h-6 w-6 rounded-full bg-white  p-[4px] "
          />
          <FillImage
            onClick={handleImageClick}
            className="rounded-[20px]"
            src={imageUrl}
            priority
          />
        </div>
        <div className="mt-[7px] flex h-6 w-full items-center justify-between">
          <h2 className="truncate font-bold">
            {name === null ? '尚未取名' : name}
          </h2>
          {gender !== null ? (
            <div className="h-[24px] w-[24px]">
              <FillImage
                src={`/images/icons/${
                  genderPath[gender as keyof typeof genderPath]
                }.png`}
              />
            </div>
          ) : null}
        </div>
        <div className="flex h-[24px] w-full items-center justify-between">
          <div className=" w-2/3 truncate text-xs  text-gray-400">
            {area === null ? '尚未設置地址' : city + area}
          </div>
          <Image
            src={`/images/icons/deliver${isPublish ? '-pink' : ''}.png`}
            width={24}
            height={24}
            alt=""
          />
        </div>
      </DeliverCard>
    </>
  )
}

export default PetCard
