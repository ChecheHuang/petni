'use client'

import Loading from '@/components/loading'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className=" h-full w-full ">
      <Link href="/pair">
        <Loading className="m-auto w-[200px]" />
      </Link>
    </div>
  )
}

export default Home
