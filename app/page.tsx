import Aside from './components/Aside'
import Main from './components/Main'
import React from 'react'

function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-[1280px] ">
        <Aside />
        <Main />
      </div>
    </>
  )
}

export default Home
