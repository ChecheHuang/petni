'use client'

import DeliverCard from './DeliverCard'
import Image from 'next/image'

function DeliverPage() {
  return (
    <div className="px-[87px] pt-[30px]  ">
      <DeliverCard className=" gap-2.5">
        <Image
          src={'/images/deliver/Vector.png'}
          alt="deliver"
          width={56}
          height={56}
        />
        <div className="text-sm text-info">上傳寵物照片</div>
      </DeliverCard>
    </div>
  )
}

export default DeliverPage
