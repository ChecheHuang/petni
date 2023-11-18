'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

interface ImageButtonProps extends ButtonProps {
  imgWidth: number
  imgHeight: number
  alt?: string
  imgUrl: string
  hoverImgUrl?: string
  isActive?: boolean
}

function ImageButton({
  imgWidth,
  imgHeight,
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
      <Image
        src={isHover || isActive ? hoverImgUrl : imgUrl}
        sizes="100vw"
        width={imgWidth}
        height={imgHeight}
        alt={alt}
      />
    </Button>
  )
}

export default ImageButton
