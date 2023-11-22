import AuthNavbar from './_compoment/AuthNavbar'
import DeleteModal from './_compoment/DeleteModal'
import NavigateModal from './_compoment/NavigateModal'
import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import SimpleBar from '@/components/SimpleBar'
import { redirect } from 'next/navigation'
import React from 'react'

async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getUserAuth()
  if (!session) {
    redirect('/')
  }
  return (
    <>
      <DeleteModal />
      <NavigateModal />
      <div className="min-h-screen ">
        <header className="sticky top-0 z-10 bg-[#FFFFFF] shadow-[0px_1px_9px_0px_#2626260D]  ">
          <MaxWidthWrapper className="h-[77.53px]">
            <AuthNavbar
              image={session?.user?.image as string}
              name={session?.user?.name as string}
            />
          </MaxWidthWrapper>
        </header>
        <main className="h-[calc(100vh-77.53px)]">
          <SimpleBar>
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
          </SimpleBar>
        </main>
      </div>
    </>
  )
}

export default AuthLayout
