import Aside from './_components/Aside'
import Main from './_components/Main'
import React from 'react'

function Home() {
  return (
    <>
      <div className="flex">
        <Aside />
        <Main />
      </div>
    </>
  )
}

export default Home
