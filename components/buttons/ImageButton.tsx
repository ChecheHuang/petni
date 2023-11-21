'use client'

import { FillImage } from '../fill-image'
import { Button, ButtonProps } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

interface ImageButtonProps extends ButtonProps {
  alt?: string
  imgUrl: string
  hoverImgUrl?: string
  isActive?: boolean
}

function ImageButton({
  alt = '/',
  imgUrl,
  hoverImgUrl = imgUrl,
  isActive = false,
  ...props
}: ImageButtonProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <Button
      type="button"
      variant={isActive ? 'default' : 'primary'}
      ref={hoverRef}
      {...props}
    >
      <div className="h-[36px] w-[36px]">
        <FillImage src={isHover || isActive ? hoverImgUrl : imgUrl} alt={alt} />
      </div>
    </Button>
  )
}

export default ImageButton
