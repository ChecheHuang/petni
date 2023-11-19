'use client'

import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'
import React, { useEffect, useState } from 'react'

type FillImageProps = OverRide<
  ImageProps,
  {
    alt?: string
  }
>

export function FillImage({
  className,
  onClick,
  src: defaultSrc,
  alt = '',
  ...rest
}: FillImageProps) {
  const loseImgUrl = '/images/loseImg.png'
  const [src, setSrc] = useState(defaultSrc)
  useEffect(() => {
    setSrc(defaultSrc)
  }, [defaultSrc])

  return (
    <div className={cn('w-full  overflow-hidden', className)} onClick={onClick}>
      <Image
        placeholder="blur"
        blurDataURL={loseImgUrl}
        src={src}
        alt={alt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        onError={() => setSrc(loseImgUrl)}
        {...rest}
      />
    </div>
  )
}

export function FillImage1({
  className,
  src,
  alt = '',
  ...rest
}: FillImageProps) {
  return (
    <div className={cn('relative z-10  overflow-hidden ', className)}>
      <Image src={src} alt={alt} layout="fill" {...rest} />
    </div>
  )
}
