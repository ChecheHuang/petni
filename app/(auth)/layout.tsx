import AuthNavbar from './_compoment/AuthNavbar'
import DeleteModal from './_compoment/DeleteModal'
import NavigateModal from './_compoment/NavigateModal'
import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
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
        <header className="bg-[#FFFFFF] shadow-[0px_1px_9px_0px_#2626260D]  ">
          <MaxWidthWrapper className="h-[77.53px]">
            <AuthNavbar image={session?.user?.image as string} />
          </MaxWidthWrapper>
        </header>
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </div>
    </>
  )
}

export default AuthLayout
