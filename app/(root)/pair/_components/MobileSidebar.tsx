import Sidebar from './Sidebar'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export const MobileSidebar = () => {
  return (
    <>
      <div className="fixed top-0 flex h-[62px] w-screen  items-center bg-white ">
        <Sheet>
          <SheetTrigger className="pr-4 transition hover:opacity-75 ">
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[360px] bg-white p-0">
            <SheetHeader></SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
      <div className="h-[62px] w-screen bg-black">123123</div>
    </>
  )
}
