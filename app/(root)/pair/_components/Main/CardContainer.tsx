import { cn } from '@/lib/utils'
import React from 'react'

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex h-[500px] w-[500px] items-center justify-center overflow-hidden ">
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
      {children}
    </div>
  )
}

export default CardContainer
