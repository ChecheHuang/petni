'use client'

import { getAnimalHospitalList } from '../_action/animalHospital'
import AnimalHospitalItem from './AnimalHospitalItem'
import { FillImage } from '@/components/fill-image'
import React, { useEffect, useRef, useState } from 'react'

type AnimalHospitalListProps = {
  animalHospitalList: AsyncFnReturnType<typeof getAnimalHospitalList>
}

const AnimalHospitalList = ({
  animalHospitalList,
}: AnimalHospitalListProps) => {
  const [list, setList] = useState([animalHospitalList[0]])
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const containerHeight =
        scrollRef.current.scrollTop + scrollRef.current.clientHeight
      const scrollHeight = scrollRef.current.scrollHeight
      if (scrollHeight - containerHeight < 200) {
        setList((prevList) => {
          if (prevList.length === animalHospitalList.length) return prevList
          const nextItem = animalHospitalList[prevList.length]
          return [...prevList, nextItem]
        })
      }
    }
  }
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (scrollRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  useEffect(() => {
    setList([animalHospitalList[0]])
    scrollRef.current?.scrollTo(0, 0)
  }, [animalHospitalList])
  return (
    <div
      ref={scrollRef}
      className=" scrollbar-hide h-[calc(100vh-77.53px-180px)] overflow-auto px-[88px]"
    >
      {list.map(({ city, animalHospitals }, index) => (
        <div className="space-y-2" key={index}>
          <div className="flex items-center ">
            <div className="h-[23px] w-[24px]">
              <FillImage src="/images/icons/city.png" alt="city" />
            </div>
            <div className="text-xl font-bold">{city}</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {animalHospitals.map((animalHospital) => {
              return (
                <AnimalHospitalItem
                  key={animalHospital.id}
                  {...animalHospital}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimalHospitalList
