import { FillImage } from '@/components/fill-image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

function Page() {
  return (
    <div className="relative flex h-[calc(100vh-77.53px)] justify-center gap-[300px] ">
      <div className=" pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[309.44px] w-[304.11px] -translate-x-1/2 -translate-y-1/2 transform">
        <FillImage src="/images/theme/text-cat.png" />
      </div>
      <div className="absolute right-[130px]  top-[40px] h-[30px] w-[132px] rounded-[10px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12] ">
        <button
          className={cn(
            'h-full w-1/2 rounded-[10px] text-sm',
            ' bg-black text-sm text-white ',
          )}
        >
          喵星人
        </button>
        <button className={cn('h-full w-1/2 rounded-[10px] text-sm')}>
          汪星人
        </button>
      </div>
      <div className="absolute bottom-[40px]  right-[130px] flex h-[42px] w-[108px] justify-between   ">
        <button className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12]">
          <ChevronLeft className="text-bold h-6 w-6" />
        </button>
        <button className="flex h-[42px] w-[42px] items-center justify-center rounded-[14px] bg-white shadow-[0px_2px_7px_0px_#0A0A0A12]">
          <ChevronRight className="text-bold h-6 w-6" />
        </button>
      </div>
      <div className="flex w-[350px] flex-col justify-center  gap-[37px] pl-[60px] ">
        <h1 className="text-[72px] font-bold">橘貓</h1>
        <div className="text-lg text-[#878787]">
          個性膽小、貪吃、愛講話，十隻橘貓九隻胖，另一隻...超胖。
        </div>
        <Button
          variant="ghost"
          className="group flex h-[46px] w-[196px] justify-between rounded-[16px] bg-white pl-[28px] pr-[10px] text-black shadow-[0px_2px_7px_0px_#0A0A0A12]  "
        >
          搜尋橘貓
          <div className="flex h-[37px] w-[37px] items-center justify-center rounded-[16px] bg-black text-white transition-all group-hover:bg-white group-hover:text-info ">
            <Search className="h-6 w-6 " />
          </div>
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[642px] w-[457px] ">
          <FillImage src="/images/theme/橘貓.png" />
        </div>
      </div>
    </div>
  )
}

export default Page
