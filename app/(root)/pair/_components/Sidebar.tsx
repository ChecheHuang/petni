'use client'

import ImageButton from '../../../../components/buttons/ImageButton'
import SimpleBar from '@/components/SimpleBar'
import CustomButton from '@/components/buttons/CustomButton'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, Form } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { catFurColorOptions, dogFurColorOptions } from '@/config/options'
import { cn } from '@/lib/utils'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { create } from 'zustand'

interface useFilterPetStore {
  data: Partial<SettingFormType>
  setData: (data: Partial<SettingFormType>) => void
}

export const useFilterPet = create<useFilterPetStore>((set) => ({
  data: {},
  setData: (data: Partial<SettingFormType>) => set({ data }),
}))
type SettingFormType = {
  category: string
  gender: string
  age: string
  furColor: string
  isNearBy: boolean
  isSound: boolean
}

function Sidebar({ className }: { className?: string }) {
  const { data: initData, setData } = useFilterPet()
  const form = useForm<SettingFormType>({
    defaultValues: initData,
  })
  const { category, gender, age, furColor } = form.watch()
  const options = category === '貓' ? catFurColorOptions : dogFurColorOptions

  const setValue = (name: keyof SettingFormType) => (value: string) => {
    form.setValue(name, value)
  }
  function onSubmit(values: SettingFormType) {
    setData(values)
    toast.success('套用成功')
  }

  return (
    <div
      className={cn(
        'relative h-full w-[screen]  bg-[#FAFAFA]  shadow-[0px_2px_7px_0px_#0A0A0A12]  ',
        'md:h-[calc(100vh-77.53px)]  md:w-[413px] md:pl-[87px]',
        className,
      )}
    >
      <SimpleBar>
        <Form {...form}>
          <form
            className="flex flex-col gap-2 px-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div>
              <h1 className=" mb-2 font-medium">我想尋找</h1>
              <div className="flex flex-wrap  justify-between">
                <ImageButton
                  size="big"
                  alt="cat"
                  imgUrl={`/images/icons/cat-dark.png`}
                  hoverImgUrl={`/images/icons/cat.png`}
                  isActive={category === '貓'}
                  onClick={() => {
                    setValue('category')('貓')
                  }}
                />
                <ImageButton
                  size="big"
                  alt="cat"
                  imgUrl={`/images/icons/dog-dark.png`}
                  hoverImgUrl={`/images/icons/dog.png`}
                  isActive={category === '犬'}
                  onClick={() => {
                    setValue('category')('犬')
                  }}
                />
                <CustomButton
                  value={'不拘'}
                  activeValue={category}
                  onClick={setValue('category')}
                  size="big"
                >
                  不拘
                </CustomButton>
              </div>
            </div>
            <div>
              <h1 className=" mb-2 font-medium">性別</h1>
              <div className="flex flex-wrap  justify-between">
                <ImageButton
                  size="big"
                  imgUrl="/images/icons/male.png"
                  isActive={gender === '男生'}
                  onClick={() => setValue('gender')('男生')}
                />
                <ImageButton
                  size="big"
                  imgUrl="/images/icons/female.png"
                  isActive={gender === '女生'}
                  onClick={() => setValue('gender')('女生')}
                />
                <CustomButton
                  value={'不拘'}
                  activeValue={gender}
                  onClick={() => setValue('gender')('不拘')}
                  size="big"
                >
                  不拘
                </CustomButton>
              </div>
            </div>
            <div>
              <h1 className=" mb-2 font-medium">年齡</h1>
              <div className="flex flex-wrap  justify-between">
                {['幼年', '成年', '不拘'].map((option) => {
                  return (
                    <CustomButton
                      key={option}
                      value={option}
                      activeValue={age}
                      onClick={setValue('age')}
                      size="normal"
                    />
                  )
                })}
              </div>
            </div>
            {category === '犬' || category === '貓' ? (
              <div>
                <h1 className=" mb-2 font-medium">顏色</h1>
                <div className="flex flex-wrap  justify-between gap-3">
                  {options.map((option) => (
                    <CustomButton
                      key={option}
                      value={option}
                      text={option + category}
                      activeValue={furColor}
                      onClick={setValue('furColor')}
                      size="normal"
                    />
                  ))}
                  <CustomButton
                    value="不拘"
                    activeValue={furColor}
                    onClick={setValue('furColor')}
                    size="normal"
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-2 flex justify-between">
              <h1 className=" font-medium">搜尋附近</h1>
              <FormField
                control={form.control}
                name="isNearBy"
                render={({ field }) => {
                  return (
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  )
                }}
              />
            </div>
            <div className="mt-2 flex justify-between">
              <h1 className=" font-medium">互動音效</h1>
              <FormField
                control={form.control}
                name="isSound"
                render={({ field }) => {
                  return (
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  )
                }}
              />
            </div>
            <Button
              type="submit"
              className={cn('sticky bottom-0   ', ' md:mt-2')}
            >
              套用
            </Button>
          </form>
        </Form>
      </SimpleBar>
    </div>
  )
}

export default Sidebar
