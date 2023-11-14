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
  hoverImgUrl: string
}

function ImageButton({
  imgWidth,
  imgHeight,
  alt = '/',
  imgUrl,
  hoverImgUrl,
  ...props
}: ImageButtonProps) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  return (
    <Button ref={hoverRef} {...props}>
      <Image
        src={isHover ? hoverImgUrl : imgUrl}
        width={imgWidth}
        height={imgHeight}
        alt={alt}
      />
    </Button>
  )
}

export default ImageButton
