import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import Form from 'components/Form'

enum InputNames {
  textSearch = 'textSearch'
}

export type RestaurantSearchControlData = {
  [InputNames.textSearch]: string
}

type SearchControlProps = {
  onSubmit?: (formData: RestaurantSearchControlData) => any
}

const RestaurantSearchControls: FC<SearchControlProps> = ({ onSubmit }) => {
  const form = useForm<RestaurantSearchControlData>()

  const handleSubmit = form.handleSubmit(formData => {
    onSubmit?.(formData)
  })

  return (
    <Form
      control={form.control}
      register={form.register}
      onSubmit={handleSubmit}
    >
      <Form.SearchInput
        label='Search Restaurants'
        name={InputNames.textSearch}
        onClick={handleSubmit}
      />
    </Form>
  )
}

export default RestaurantSearchControls
