import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import Form from 'components/Form'
import { States } from 'constants/States'
import { Genres } from 'constants/Genres'

enum InputNames {
  textSearch = 'textSearch',
  stateSelect = 'stateSelect',
  genreSelect = 'genreSelect'
}

export type RestaurantSearchControlData = {
  [InputNames.textSearch]: string,
  [InputNames.stateSelect]: string,
  [InputNames.genreSelect]: string,
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
        placeholder='Search Restaurants'
        name={InputNames.textSearch}
        onClick={handleSubmit}
      />
      <Form.Select
        className='mt-3'
        label='Select State'
        placeholder='All'
        name={InputNames.stateSelect}
        options={States}
      />
      <Form.Select
        className='mt-3'
        label='Select Cuisine Type'
        placeholder='All'
        name={InputNames.genreSelect}
        options={Genres}
      />
    </Form>
  )
}

export default RestaurantSearchControls
