'use client'

import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import { FillImage } from '@/components/fill-image'
import { cn } from '@/lib/utils'
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion'
import { X } from 'lucide-react'
import { getSession } from 'next-auth/react'
import React from 'react'

type CardProps = {
  index: number
  imageUrl: string
  gender: string | null
  city: string | null
  area: string | null
  name: string | null
  id: string
} & {
  isLastCard?: boolean
  fetchNextPage?: () => void
  remove?: () => void
}

function Card({
  id,
  imageUrl,
  gender,
  city,
  area,
  name,
  index,
  fetchNextPage,
}: CardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-100, 0, 100], [-15, -3, 15])
  const opacity = useTransform([x, y], ([xValue, yValue]: number[]) => {
    const totalDistance = Math.sqrt(xValue ** 2 + yValue ** 2)
    const opacityValue = 1 - totalDistance / 1000
    return opacityValue < 0.8 ? 0.8 : opacityValue
  })
  const control = useAnimation()

  const handleDisLike = async () => {
    control.start({
      x: -1000,
      y: -200,
      transition: { duration: 0.5 },
    })
    console.log(id)
    fetchNextPage && fetchNextPage()
  }
  const handleLike = async () => {
    control.start({
      x: 1000,
      y: 200,
      transition: { duration: 0.5 },
    })
    console.log(id)

    fetchNextPage && fetchNextPage()
  }

  return (
    <motion.div
      className={cn(
        'absolute box-content flex h-[444.23px]  w-[276.79px]   cursor-pointer items-center justify-center  overflow-hidden rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black ',
        index < 4 && 'shadow-[-6px_9px_11px_0px_#00000040]',
      )}
      animate={control}
      drag
      // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={(event, { point: { x } }) => {
        const windowWidth = window.innerWidth
        const likeThreshold = windowWidth * 0.65
        const dislikeThreshold = windowWidth * 0.5
        if (x > likeThreshold) return handleLike()
        if (x < dislikeThreshold) return handleDisLike()
        control.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        })
      }}
      style={{ x: x, y: y, rotate, opacity }}
      onDrag={(event, info) => {
        const { x, y } = info.point
      }}
    >
      <FillImage className=" pointer-events-none" src={imageUrl} alt="" />
      <div className="absolute bottom-12 left-1/2  flex h-[54px] w-[245px]  -translate-x-[115px]  transform items-center justify-between">
        <div
          onClick={handleDisLike}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <X />
        </div>
        <div className="min-w-[94px] text-white">
          <div className="flex items-center justify-between text-lg ">
            {name}
            <span className="h-[24px] w-[24px]">
              <FillImage
                src={
                  gender !== '男生'
                    ? '/images/icons/female.png'
                    : '/images/icons/male.png'
                }
              />
            </span>
          </div>
          <div className="text-sm">{city || '' + area}</div>
        </div>
        <div
          onClick={handleLike}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <div className="h-[31px] w-[31px]">
            <FillImage src="/images/icons/love_S.png" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
