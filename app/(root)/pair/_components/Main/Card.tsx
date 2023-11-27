'use client'

import CardContainer from './CardContainer'
import { FillImage } from '@/components/fill-image'
import { cn } from '@/lib/utils'
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from 'framer-motion'
import { X } from 'lucide-react'
import React from 'react'

function Card() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-100, 0, 100], [-15, -3, 15])
  const opacity = useTransform([x, y], ([xValue, yValue]: number[]) => {
    const totalDistance = Math.sqrt(xValue ** 2 + yValue ** 2)
    const opacityValue = 1 - totalDistance / 1000
    return opacityValue < 0.8 ? 0.8 : opacityValue
  })
  const control = useAnimation()

  const dragCardClassName =
    'absolute box-content flex h-[444.23px]  w-[276.79px]   cursor-pointer items-center justify-center  overflow-hidden rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black shadow-[-6px_9px_11px_0px_#00000040]'

  const handleDisLike = () => {
    control.start({
      x: -500,
      y: -100,
      transition: { duration: 0.5 },
    })
  }
  const handleLike = () => {
    control.start({
      x: 500,
      y: 100,
      transition: { duration: 0.5 },
    })
  }
  return (
    <motion.div
      className={dragCardClassName}
      animate={control}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={(event, info) => {
        x.set(0)
        y.set(0)
      }}
      style={{ x, y, rotate, opacity }}
      onDrag={(event, info) => {
        console.log('拖曳位置x:', info.point.x)
        console.log('拖曳位置y:', info.point.y)
      }}
    >
      <FillImage
        className=" pointer-events-none"
        src="/images/main/dogImg.png"
        alt=""
      />
    </motion.div>
  )
}

export default Card
