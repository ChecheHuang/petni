'use client'

import { Card } from '@/components/ui/card'
import { FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'

type NameCardProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NameCard(field: NameCardProps) {
  return (
    <FormControl>
      <Card className=" h-[106px] w-[381px] rounded-[20px] p-[18px]">
        <div className="space-y-1.5">
          <div>牠的名字</div>
          <Input placeholder="若尚未取名可不填" {...field} />
        </div>
      </Card>
    </FormControl>
  )
}
