import DeleteModal from './_compoment/DeleteModal'
import LogoutButton from './_compoment/LogoutButton'
import NavigateModal from './_compoment/NavigateModal'
import { getUserAuth } from '@/app/api/auth/[...nextauth]/authOptions'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import MobileBottomNavbar from '@/components/Navbar/MobileBottomNavbar'
import Navbar from '@/components/Navbar/Navbar'
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
      <div className="min-h-screen pb-[80px]  ">
        <Navbar>
          <LogoutButton
            image={session?.user?.image as string}
            name={session?.user?.name as string}
          />
        </Navbar>
        <MobileBottomNavbar />

        <main className="md:h-[calc(100vh-77.53px)]">
          <SimpleBar>
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
          </SimpleBar>
        </main>
      </div>
    </>
  )
}

export default AuthLayout
