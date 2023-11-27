import Card from './Card'
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

function DropCardArea() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-100, 0, 100], [-15, -3, 15])
  const opacity = useTransform([x, y], ([xValue, yValue]: number[]) => {
    const totalDistance = Math.sqrt(xValue ** 2 + yValue ** 2)
    const opacityValue = 1 - totalDistance / 1000
    return opacityValue < 0.8 ? 0.8 : opacityValue
  })
  const control = useAnimation()

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
    <CardContainer>
      <Card />
      <Card />
      <div className="absolute bottom-12 left-1/2 flex h-[54px] w-[245px]  -translate-x-[115px]  transform items-center justify-between">
        <div
          onClick={handleDisLike}
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <X />
        </div>
        <div className="min-w-[94px] text-white">
          <div className="flex items-center justify-between text-lg ">
            123123
            <span className="h-[24px] w-[24px]">
              <FillImage src="/images/icons/female.png" />
            </span>
          </div>
          <div className="text-sm">我是地址</div>
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
    </CardContainer>
  )
}

export default DropCardArea
