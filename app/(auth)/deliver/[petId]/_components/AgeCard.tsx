import CustomButton from '@/components/buttons/CustomButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Pet } from '@prisma/client'
import React from 'react'

type AgeCardProps = {
  setAge: (age: '幼齡' | '成年') => void
} & Pick<Pet, 'age'>

export default function AgeCard({ setAge, age }: AgeCardProps) {
  return (
    <Card className=" h-[126px] w-[381px]  rounded-[20px] p-[18px]">
      <div className="space-y-1.5">
        <div>
          年齡<span className="text-info">(*必選)</span>
        </div>
        <div className=" flex gap-[11px]">
          <CustomButton
            className="h-[40px] w-[166px] "
            value={'幼齡'}
            activeValue={age}
            onClick={setAge}
          />
          <CustomButton
            className="h-[40px] w-[166px] "
            value={'成年'}
            activeValue={age}
            onClick={setAge}
          />
        </div>
      </div>
    </Card>
  )
}
