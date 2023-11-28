'use client'

import Sidebar from './Sidebar'
import { FillImage } from '@/components/fill-image'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { create } from 'zustand'

interface useSheetStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useSheet = create<useSheetStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))

export const MobileSidebar = ({ className }: { className?: string }) => {
  const { isOpen, setIsOpen } = useSheet()

  return (
    <>
      <div
        className={cn(
          'fixed top-0 z-10 flex h-[62px]  w-screen items-center justify-between  bg-white px-4 ',
          className,
        )}
      >
        <div className="h-[46px] w-[46px] cursor-pointer ">
          <FillImage src="/images/icons/undo.png" />
        </div>
        <div className="text-xl font-bold">雙色狗</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className=" h-[38px] w-[38px] transition hover:opacity-75 ">
            <FillImage src="/images/icons/filter.png" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[360px] bg-white p-0">
            <SheetHeader>
              <div className="flex h-[62px] w-full items-center justify-between bg-white">
                <FaAngleLeft
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 cursor-pointer"
                />
                <div className="text-xl ">篩選</div>
                <div />
              </div>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="h-[62px] w-screen bg-black">123123</div>
    </>
  )
}
