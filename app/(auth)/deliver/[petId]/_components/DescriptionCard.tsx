'use client'

import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Pet } from '@prisma/client'
import React from 'react'

export default function DescriptionCard({
  description,
}: Pick<Pet, 'description'>) {
  return (
    <Card className=" h-[184px] w-[381px] rounded-[20px] p-[18px]">
      <div className="space-y-1.5">
        <div>狀況</div>
        <Textarea className="h-[118px] resize-none " placeholder="限制40字" />
      </div>
    </Card>
  )
}
