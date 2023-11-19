'use client'

import ImageButton from '../../../../components/buttons/ImageButton'
import SimpleBar from '@/components/SimpleBar'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import React from 'react'

function Aside() {
  return (
    <div className=" h-[calc(100vh-77.53px)] w-[413px]   bg-[#FAFAFA]  pl-[87px] shadow-[0px_2px_7px_0px_#0A0A0A12] ">
      <SimpleBar>
        <div className="mb-4 flex  flex-col gap-2 px-3">
          <div>
            <h1 className=" mb-2 font-medium">我想尋找</h1>
            <div className="flex flex-wrap  justify-between">
              <ImageButton
                variant="primary"
                size="big"
                imgWidth={36}
                imgHeight={36}
                alt="cat"
                imgUrl={`/images/icons/cat-dark.png`}
                hoverImgUrl={`/images/icons/cat.png`}
              />
              <ImageButton
                variant="primary"
                size="big"
                imgWidth={36}
                imgHeight={36}
                alt="cat"
                imgUrl={`/images/icons/dog-dark.png`}
                hoverImgUrl={`/images/icons/dog.png`}
              />
              <Button variant="primary" size="big">
                不拘
              </Button>
            </div>
          </div>
          <div>
            <h1 className=" mb-2 font-medium">性別</h1>
            <div className="flex flex-wrap  justify-between">
              <Button variant="primary" size="big">
                <Image
                  src="/images/icons/male.png"
                  alt="male"
                  width={36}
                  height={36}
                ></Image>
              </Button>

              <Button variant="primary" size="big">
                <Image
                  src="/images/icons/female.png"
                  alt="male"
                  width={36}
                  height={36}
                ></Image>
              </Button>
              <Button variant="primary" size="big">
                不拘
              </Button>
            </div>
          </div>
          <div>
            <h1 className=" mb-2 font-medium">年齡</h1>
            <div className="flex flex-wrap  justify-between">
              <Button variant="primary" size="normal">
                幼齡
              </Button>

              <Button variant="primary" size="normal">
                成年
              </Button>
              <Button variant="primary" size="normal">
                不拘
              </Button>
            </div>
          </div>
          <div>
            <h1 className=" mb-2 font-medium">顏色</h1>
            <div className="flex flex-wrap  justify-between gap-3">
              {[
                '白犬',
                '黑犬',
                '紅棕犬',
                '雙色犬',
                '三色犬',
                '黃犬',
                '虎斑犬',
                '灰犬',
                '不拘',
              ].map((dog) => (
                <Button key={dog} variant="primary" size="normal">
                  {dog}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <h1 className=" font-medium">搜尋附近</h1>
            <Switch />
          </div>
          <div className="mt-2 flex justify-between">
            <h1 className=" font-medium">互動音效</h1>
            <Switch />
          </div>
          <Button className="mt-2">套用</Button>
        </div>
      </SimpleBar>
    </div>
  )
}

export default Aside
