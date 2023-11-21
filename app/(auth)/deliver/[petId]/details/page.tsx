import { getPet } from '../../_actions/pet'
import { FillImage } from '@/components/fill-image'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function DetailsPage({
  params: { petId },
}: {
  params: { petId: string }
}) {
  const pet = await getPet(petId)
  const {
    imageUrl,
    name,
    city = '',
    area,
    age,
    gender,
    furColor,
    category,
    phone,
    description,
    isPublish,
  } = pet
  if (!isPublish) return notFound()

  const genderMap = {
    男生: 'male',
    女生: 'female',
    不明: 'unknown',
  }

  return (
    <div className="mt-[35px] flex justify-center gap-[26px] ">
      <div className=" flex h-[579px] w-[428px] items-center justify-center rounded-[32px] bg-white p-[18px]">
        <FillImage className="rounded-[32px]" src={imageUrl} />
      </div>
      <div className="flex h-[579px] w-[425px] flex-col justify-between">
        <div className="flex w-full items-center justify-between">
          <div>
            <div className="text-lg">{name}</div>
            <div className="text-sm">
              {city}
              {area}
            </div>
          </div>
          <Link
            href={`/deliver/${petId}`}
            className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-white"
          >
            <div className="h-[24px] w-[24px]">
              <FillImage src="/images/icons/edi.png" />
            </div>
          </Link>
        </div>
        <Card className=" h-[103px] w-full  rounded-[20px] p-6">
          <div className="flex items-center justify-between text-xl font-bold">
            <div>{name}</div>
            <div>110</div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div>{age}</div>
            <div>follows</div>
          </div>
        </Card>
        <Card className=" flex h-[148px] w-full items-center justify-around rounded-[20px] p-6">
          <div className="flex flex-col items-center gap-[7px]">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#F8F8F8]">
              <div className="h-[24px] w-[24px]">
                <FillImage src="/images/icons/status.png" />
              </div>
            </div>
            <div>求包養</div>
          </div>
          <div className="flex flex-col items-center gap-[7px]">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#F8F8F8]">
              <div className="h-[24px] w-[24px]">
                <FillImage
                  src={`/images/icons/${
                    genderMap[gender as keyof typeof genderMap]
                  }.png`}
                />
              </div>
            </div>
            <div>{gender}</div>
          </div>
          <div className="flex flex-col items-center gap-[7px]">
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#F8F8F8]">
              <Image
                src="/images/icons/theme-pink.png"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <div>
              {furColor}
              {category}
            </div>
          </div>
        </Card>
        <Card className=" h-[202px] space-y-2.5 rounded-[20px] p-6">
          <div>{phone}</div>
          <div>
            {city}
            {area}
          </div>
          <div className="text-sm">{description}</div>
        </Card>
      </div>
    </div>
  )
}
