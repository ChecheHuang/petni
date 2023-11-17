import { getPet } from '@/actions/pet'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'
import React from 'react'

async function PetIdPage({ params: { petId } }: { params: { petId: string } }) {
  const pet = await getPet(petId)

  console.log(pet)
  return (
    <div className="flex h-[calc(100vh-77.53px)] items-center justify-center ">
      <Card className="flex h-[356.47px] w-[237.7px] flex-col gap-2.5 rounded-[28px] p-4 ">
        <div className="relative h-[264.47px] w-[205.19px] overflow-hidden rounded-[28px]">
          <Image src={pet.imageUrl} layout="fill" alt="" />
        </div>
        <Button variant="info">替換照片</Button>
      </Card>
      <Card className=" h-[126px] w-[381px] rounded-[20px] p-[18px]"></Card>
    </div>
  )
}

export default PetIdPage
