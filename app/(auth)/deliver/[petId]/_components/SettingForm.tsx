'use client'

import { GetPetReturnType } from '../../_actions/pet'
import AgeCard from './AgeCard'
import CategoryGenderCard from './CategoryGenderCard'
import ContactCard from './ContactCard'
import DescriptionCard from './DescriptionCard'
import FurColorCard from './FurColorCard'
import NameCard from './NameCard'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import trpcClient from '@/lib/trpc/trpcClient'
import { petFormSchema } from '@/lib/validations/petValidation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export type FormDataType = Omit<GetPetReturnType, 'imageUrl'>

type SettingFormProps = {
  initData: FormDataType
  petId: string
}

export default function SettingForm({ initData, petId }: SettingFormProps) {
  const form = useForm<FormDataType>({
    defaultValues: initData,
  })
  const control = form.control
  const { gender, category, age, furColor, city } = form.watch()
  const router = useRouter()

  const { mutate: update, isLoading: isUpdating } =
    trpcClient.pet.updatePet.useMutation({
      onSuccess: () => {
        toast.success('更新成功')
        router.refresh()
        // router.push(`/deliver`)
      },
    })

  function onSubmit(values: FormDataType) {
    try {
      const data = petFormSchema.parse({ petId, ...values })
      update(data)
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error('請先確認必選欄位填寫正確')
      }
    }
  }
  const setValue = (name: keyof FormDataType) => (value: string) => {
    form.setValue(name, value)
  }
  return (
    <>
      <Form {...form}>
        <form
          className="flex gap-[13px] "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-3">
            <CategoryGenderCard
              gender={gender}
              category={category}
              setGender={setValue('gender')}
              setCategory={setValue('category')}
            />
            <AgeCard age={age} setAge={setValue('age')} />
            <NameCard control={control} />
            <FurColorCard
              category={category}
              furColor={furColor}
              setFurColor={setValue('furColor')}
            />
          </div>
          <div className="space-y-3">
            <ContactCard
              resetArea={() => form.setValue('area', '')}
              control={control}
              city={city}
            />
            <DescriptionCard control={control} />
            <Button disabled={isUpdating} className="w-full" type="submit">
              發布
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
