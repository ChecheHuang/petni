import CardContainer from './CardContainer'
import { FillImage } from '@/components/fill-image'
import { cn } from '@/lib/utils'
import { motion, useMotionValue, useTransform } from 'framer-motion'
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

  const dragCardClassName =
    'box-content flex h-[444.23px]  w-[276.79px]   cursor-pointer items-center justify-center  overflow-hidden rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black shadow-[-6px_9px_11px_0px_#00000040]'

  const handleDisLike = () => {
    x.set(-300)
  }
  const handleLike = () => {
    console.log('like')
    x.set(300)
  }
  return (
    <CardContainer>
      <div className={cn(dragCardClassName, 'absolute rotate-[-3deg] ')}>
        <FillImage
          className=" pointer-events-none"
          src="/images/main/dogImg.png"
          alt=""
        />
      </div>
      <motion.div
        className={dragCardClassName}
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
      <div className="absolute bottom-12 left-[37%]  flex h-[54px] w-[245px] items-center justify-between">
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
