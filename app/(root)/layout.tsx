'use client'

import MobileNavbar from './_components/MobileNavbar'
import Navbar from './_components/Navbar'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SimpleBar from '@/components/SimpleBar'
import Loading from '@/components/loading'
import { Suspense } from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar className="hidden md:flex " />
      <MobileNavbar />
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
