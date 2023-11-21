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
    <div>
      {options.map((option) => {
        const isSelected = area === option
        return (
          <Button
            variant={isSelected ? 'default' : 'outline'}
            onClick={() => onClick(option)}
            key={option}
          >
            {option}
          </Button>
        )
      })}
    </div>
  )
}

export default SelectButtons
