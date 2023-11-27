'use client'

import { cn } from '@/lib/utils'

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[500px] items-center justify-center   ">
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
          'box-content  flex h-[444.23px]  w-[276.79px] rotate-[-3deg]  items-center justify-center overflow-hidden  rounded-[32px] border-[0.9375vw] border-white bg-gradient-to-b from-slate-100 to-black shadow-[-6px_9px_11px_0px_#00000040]',
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default CardContainer
