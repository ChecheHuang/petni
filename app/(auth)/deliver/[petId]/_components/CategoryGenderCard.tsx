import { GetPetReturnType } from '../../_actions/pet'
import CustomButton from '@/components/buttons/CustomButton'
import ImageButton from '@/components/buttons/ImageButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import React from 'react'

type CategoryGenderCardProps = {
  setGender: (gender: '男' | '女' | '不明') => void
  setCategory: (category: '貓' | '狗') => void
} & Pick<GetPetReturnType, 'category' | 'gender'>

export default function CategoryGenderCard({
  category,
  gender,
  setGender,
  setCategory,
}: CategoryGenderCardProps) {
  return (
    <Card className="flex h-[104px] w-[381px] items-center justify-between rounded-[20px] p-[18px]">
      <div className="space-y-1.5">
        <div>
          種類<span className="text-info">(*必選)</span>
        </div>
        <div className=" space-x-1">
          <ImageButton
            className="h-[60px] w-[60px]"
            imgWidth={36}
            imgHeight={36}
            alt="cat"
            imgUrl={`/images/cat-dark.png`}
            hoverImgUrl={`/images/cat.png`}
            isActive={category === '貓'}
            onClick={() => setCategory('貓')}
          />
          <ImageButton
            className="h-[60px] w-[60px]"
            imgWidth={36}
            imgHeight={36}
            alt="dog"
            imgUrl={`/images/dog-dark.png`}
            hoverImgUrl={`/images/dog.png`}
            isActive={category === '狗'}
            onClick={() => setCategory('狗')}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <div>
          性別<span className="text-info">(*必選)</span>
        </div>
        <div className=" flex gap-1">
          <ImageButton
            className="h-[60px] w-[60px]"
            imgWidth={36}
            imgHeight={36}
            alt="male"
            imgUrl="/images/male.png"
            isActive={gender === '男'}
            onClick={() => setGender('男')}
          />
          <ImageButton
            className="h-[60px] w-[60px]"
            imgWidth={36}
            imgHeight={36}
            alt="male"
            imgUrl="/images/female.png"
            isActive={gender === '女'}
            onClick={() => setGender('女')}
          />
          <CustomButton
            className={cn(
              'h-[60px] w-[60px] ',
              gender !== '不明' && 'text-[#878787]',
            )}
            value={'不明'}
            activeValue={gender}
            onClick={setGender}
          />
        </div>
      </div>
    </Card>
  )
}
