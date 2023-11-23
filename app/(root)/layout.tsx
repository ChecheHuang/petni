'use client'

import Navbar from './_components/Navbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SimpleBar from '@/components/SimpleBar'
import Loading from '@/components/loading'
import { Suspense } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-10 bg-[#FFFFFF] shadow-[0px_1px_9px_0px_#2626260D]  ">
        <MaxWidthWrapper className="h-[77.53px]">
          <Navbar />
        </MaxWidthWrapper>
      </header>
      <main className="h-[calc(100vh-77.53px)]">
        <Suspense fallback={<Loading />}>
          <SimpleBar>
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
          </SimpleBar>
        </Suspense>
      </main>
    </>
  )
}

export default DashboardLayout
