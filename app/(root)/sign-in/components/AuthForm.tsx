'use client'

import { Button } from '@/components/ui/button'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

function AuthForm() {
  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/deliver')
      console.log('已登入')
    }
  }, [session?.status, router])

  const socialAction = (action: string) => {
    void signIn(action, { redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error('Invalid credentials!')
      }

      if (callback?.ok) {
        router.push('/deliver')
      }
    })
  }
  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div>請登入帳號，才能發送養文</div>
        {/* <Button
          className="h-[46px] w-[236px]"
          onClick={() => socialAction('github')}
        >
          <BsGithub className="mr-2 h-4 w-4" /> GitHub 登入
        </Button> */}
        <Button
          className="h-[46px] w-[236px]"
          onClick={() => socialAction('google')}
        >
          <FcGoogle className="mr-2 h-4 w-4" /> Google 登入
        </Button>
        <Button
          variant="secondary"
          className="h-[46px] w-[236px] font-medium"
          onClick={() => router.back()}
        >
          取消
        </Button>
      </div>
    </>
  )
}

export default AuthForm
