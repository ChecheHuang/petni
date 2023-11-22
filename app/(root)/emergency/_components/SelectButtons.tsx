'use client'

import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import React from 'react'

const SelectButtons = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const options = ['北部', '中部', '南部', '東部']

  const area = searchParams.get('area')
  const onClick = (option: string) => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          area: option,
        },
      },
      { skipNull: true, skipEmptyString: true },
    )

    router.push(url)
  }

  return (
    <div className="flex justify-center   pb-[56px] pt-[42px]">
      <div className="space-y-[9px]">
        <div className="space-x-3 ">
          {options.map((option) => {
            const isSelected = area === option
            return (
              <Button
                className="h-[38px] w-[95px]"
                variant={isSelected ? 'info' : 'outline'}
                onClick={() => onClick(option)}
                key={option}
              >
                {option}
              </Button>
            )
          })}
        </div>
        <div className="flex justify-end ">
          *資訊僅供參考，建議先電話聯絡再前往。
        </div>
      </div>
    </div>
  )
}

export default SelectButtons
