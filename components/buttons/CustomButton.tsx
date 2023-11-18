'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import React from 'react'

type CustomButtonProps<T> = {
  value: T
  activeValue: any
  onClick: (value: T) => void
} & Omit<ButtonProps, 'onClick' | 'value' | 'type' | 'variant'>

export default function CustomButton<T extends string>({
  value,
  activeValue,
  onClick,
  ...rest
}: CustomButtonProps<T>) {
  const isActive = value === activeValue
  return (
    <Button
      onClick={() => {
        onClick(value)
      }}
      type="button"
      variant={isActive ? 'default' : 'primary'}
      {...rest}
    >
      {value}
    </Button>
  )
}
