'use client'

import Navbar from './_components/Navbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-[#FFFFFF] shadow-[0px_1px_9px_0px_#2626260D]  ">
        <MaxWidthWrapper className="h-[77.53px]">
          <Navbar />
        </MaxWidthWrapper>
      </header>
      <MaxWidthWrapper className="h-[calc(100vh-77.53px)]">
        {children}
      </MaxWidthWrapper>
    </>
  )
}

export default DashboardLayout
