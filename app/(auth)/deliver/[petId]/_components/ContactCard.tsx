'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cityOptions } from '@/config/options'
import { Pet } from '@prisma/client'
import React from 'react'

type ContactCardProps = {}

export default function ContactCard(field: ContactCardProps) {
  return (
    <Card className=" h-[164px] w-[381px] rounded-[20px] p-[18px]">
      <div className="space-y-3">
        <div>
          聯絡方式<span className="text-info">(*必選)</span>
        </div>
        <Input placeholder="聯絡方式(電話、通訊等等．．．)" />
        <div className="flex gap-2 ">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="選擇縣市" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>選擇縣市</SelectLabel>
                {Object.keys(cityOptions).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="選擇縣市" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>選擇縣市</SelectLabel>
                {Object.keys(cityOptions).map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  )
}
