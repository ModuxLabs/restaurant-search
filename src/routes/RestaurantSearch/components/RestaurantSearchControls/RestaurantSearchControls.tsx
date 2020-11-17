import React from 'react'
import { useForm } from 'react-hook-form'

import Form from 'components/Form'

enum InputNames {
  textSearch = 'textSearch'
}

type InputTypes = {
  [InputNames.textSearch]: string
}

const RestaurantSearchControls: React.FC = () => {
  const form = useForm<InputTypes>()

  return (
    <Form control={form.control} register={form.register}>
      <Form.Input
        label='Search Restaurants'
        name={InputNames.textSearch}
      />
    </Form>
  )
}

export default RestaurantSearchControls
