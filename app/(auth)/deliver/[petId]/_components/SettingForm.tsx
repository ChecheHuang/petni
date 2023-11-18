'use client'

import { GetPetReturnType } from '../../_actions/pet'
import AgeCard from './AgeCard'
import CategoryGenderCard from './CategoryGenderCard'
import ContactCard from './ContactCard'
import NameCard from './NameCard'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'

type SettingFormProps = Omit<GetPetReturnType, 'imageUrl'>

export default function SettingForm(initData: SettingFormProps) {
  const form = useForm<SettingFormProps>({
    defaultValues: initData,
  })
  const control = form.control
  const { gender, category, age } = form.watch()
  function onSubmit(data: SettingFormProps) {
    console.log(data)
  }
  const setValue = (name: keyof SettingFormProps) => (value: string) => {
    form.setValue(name, value)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* <CategoryGenderCard
          gender={gender}
          category={category}
          setGender={setValue('gender')}
          setCategory={setValue('category')}
        /> */}
        {/* <AgeCard age={age} setAge={setValue('age')} /> */}
        {/* <FormField
          control={form.control}
          name="name"
          render={({ field: { value, onChange } }) => {
            const field = { value: value ? value : '', onChange }
            return (
              <FormControl>
                <NameCard {...field} />
              </FormControl>
            )
          }}
        /> */}
        <ContactCard />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
