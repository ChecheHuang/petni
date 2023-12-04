'use client'

import { GetThemesReturnType } from '@/actions/theme'
import { FillImage } from '@/components/fill-image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { useState } from 'react'

const ClientThemePage = (themes: GetThemesReturnType) => {
  const [currentCategory, setCurrentCategory] = useState<'貓' | '狗'>('貓')
  const [showIndex, setShowIndex] = useState(2)
  const { category, furColor, imgUrl, description } = themes[showIndex]
  // console.log(themes)
  const onNext = () => {}
  const onPrev = () => {}
  return (
    <div className=" max-w-screen relative flex min-h-[calc(100vh-77.53px)] justify-center  ">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[309.44px] w-[304.11px] -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-info/25 p-4 ">
        <FillImage src="/images/theme/text-cat.png" />
      </div>
      <div className="absolute right-[130px]  top-[40px] h-[30px] w-[132px] rounded-[10px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12] ">
        <button
          className={cn(
            'h-full w-1/2 rounded-[10px] text-sm',
            currentCategory === '貓' && ' bg-black text-sm text-white ',
          )}
          onClick={() => setCurrentCategory('貓')}
        >
          喵星人
        </button>
        <button
          className={cn(
            'h-full w-1/2 rounded-[10px] text-sm',
            currentCategory === '狗' && ' bg-black text-sm text-white ',
          )}
          onClick={() => setCurrentCategory('狗')}
        >
          汪星人
        </button>
      </div>
      <div className="absolute bottom-[40px]  right-[130px] flex h-[42px] w-[108px] justify-between   ">
        <button className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12]">
          <ChevronLeft onClick={onPrev} className="text-bold h-6 w-6" />
        </button>
        <button className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12]">
          <ChevronRight onClick={onNext} className="text-bold h-6 w-6" />
        </button>
      </div>
      {/* 真正show */}
      <div className="flex h-full w-screen justify-center gap-[300px] ">
        <div className="flex w-[350px] flex-col justify-center  gap-[37px] pl-[60px] ">
          <h1 className="text-[72px] font-bold">{furColor + category}</h1>
          <div className="text-lg text-[#878787]">{description}</div>
          <Button
            variant="ghost"
            className="group flex h-[46px] w-[196px] justify-between rounded-[16px] bg-white pl-[28px] pr-[10px] shadow-[0px_2px_7px_0px_#0A0A0A12]  "
          >
            搜尋{furColor + category}
            <div className="flex h-[37px] w-[37px] items-center justify-center rounded-[16px] bg-black text-white transition-all group-hover:bg-white group-hover:text-info ">
              <Search className="h-6 w-6 " />
            </div>
          </Button>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="  h-[642px] w-[457px]  ">
            <FillImage src={imgUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientThemePage
