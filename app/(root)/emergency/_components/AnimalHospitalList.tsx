'use client'

import { getAnimalHospitalList } from '../_action/animalHospital'
import AnimalHospitalItem from './AnimalHospitalItem'
import SimpleBar from '@/components/SimpleBar'
import { FillImage } from '@/components/fill-image'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FixedSizeList as List } from 'react-window'

type AnimalHospitalListProps = {
  animalHospitalList: AsyncFnReturnType<typeof getAnimalHospitalList>
}

const AnimalHospitalList = ({
  animalHospitalList,
}: AnimalHospitalListProps) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className=" px-[88px]">
      <Button onClick={() => setIsShow(!isShow)}>Show!!!</Button>
      {isShow &&
        animalHospitalList.map(({ city, animalHospitals }, index) => (
          <div className="space-y-2" key={index}>
            <div className="flex items-center ">
              <div className="h-[23px] w-[24px]">
                <FillImage src="/images/icons/city.png" alt="city" />
              </div>
              <div className="text-xl font-bold">{city}</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {animalHospitals
                .filter((_, index) => index < 30)
                .map((animalHospital) => {
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
