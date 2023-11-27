import { FillImage } from '@/components/fill-image'
import { cn } from '@/lib/utils'
import {
  motion,
  useMotionValue,
  useTransform,
  DragHandlers,
} from 'framer-motion'
import React from 'react'

const Test = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-100, 0, 100], [-15, -3, 15])
  const opacity = useTransform([x, y], ([xValue, yValue]: number[]) => {
    const totalDistance = Math.sqrt(xValue ** 2 + yValue ** 2)
    const opacityValue = 1 - totalDistance / 100
    return opacityValue < 0.5 ? 0.5 : opacityValue
  })

  const onDragEnd = () => {}

  return (
    <motion.div
      className={cn(
        'box-content flex h-[444.23px]  w-[276.79px]   cursor-pointer items-center justify-center  overflow-hidden rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black shadow-[-6px_9px_11px_0px_#00000040]',
      )}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={(event, info) => {
        x.set(0)
        y.set(0)
      }}
      style={{ x, y, rotate }}
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

function DropCardArea() {
  return (
    <div className="relative flex h-[500px] items-center justify-center overflow-hidden  ">
      <div
        className={cn(
          'absolute -z-10 h-[444.23px] w-[276.79px]   rounded-[32px] bg-white shadow-[0px_9px_11px_0px_#00000040]',
          'translate-y-[-2vw] rotate-[14deg] scale-[0.92]',
        )}
      />
      <div
        className={cn(
          'absolute -z-10 h-[444.23px] w-[276.79px]  rounded-[32px] bg-white shadow-[0px_9px_11px_0px_#00000040]',
          'translate-x-4 translate-y-[3vw] rotate-[14deg] scale-[0.85]',
        )}
      />
      <div
        className={cn(
          'absolute box-content  flex h-[444.23px]  w-[276.79px] rotate-[-3deg]  items-center justify-center overflow-hidden  rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black shadow-[-6px_9px_11px_0px_#00000040]',
        )}
      >
        <FillImage
          className=" pointer-events-none"
          src="/images/main/dogImg.png"
          alt=""
        />
      </div>
      <Test />
      <div className="absolute bottom-12 flex h-[56px] w-[255px] items-center justify-between">
        <div>x</div>
        <div>
          <div>
            123123 <span>男</span>
          </div>
          <div>我是地址</div>
        </div>
        <div>愛心</div>
      </div>
    </div>
  )
}

export default DropCardArea
