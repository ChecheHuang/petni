'use client'

// import './style.css'
import React, { CSSProperties } from 'react'
import { FixedSizeList as List } from 'react-window'

const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
  <div style={style}>{index}</div>
)
const array = Array(1000)
  .fill(true)
  .map((_, i) => i)

export const Demo = () => {
  return (
    <>
      {/* {Array(1000)
        .fill(true)
        .map((_, i) => (
          <div key={i}>
            <Row index={i} />
          </div>
        ))} */}
      {Array(1000)
        .fill(true)
        .map((_, i) => (
          <div key={i}>
            <Row index={i} style={{}} />
          </div>
        ))}
      <List
        className="List"
        height={150}
        itemCount={1000}
        itemSize={35}
        width={'100%'}
      >
        {Row}
      </List>
    </>
  )
}
