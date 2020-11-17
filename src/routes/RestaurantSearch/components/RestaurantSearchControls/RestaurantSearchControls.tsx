import React, { FC, useEffect, useRef } from 'react'
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
  const prevSearch = useRef('')
  const searchTouched = useRef(false)

  const form = useForm<RestaurantSearchControlData>({ mode: 'onChange' })
  const searchValue = form.watch(InputNames.textSearch)

  const handleSubmit = form.handleSubmit(formData => {
    onSubmit?.(formData)
  })

  useEffect(() => {
    searchTouched.current = searchTouched.current || Boolean(searchValue)
    if (searchTouched.current && searchValue === '' && prevSearch.current !== '') {
      handleSubmit()
    }
    prevSearch.current = searchValue
  }, [searchValue, handleSubmit])

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
        onChange={handleSubmit}
      />
      <Form.Select
        className='mt-3'
        label='Select Cuisine Type'
        placeholder='All'
        name={InputNames.genreSelect}
        options={Genres}
        onChange={handleSubmit}
      />
    </Form>
  )
}

export default RestaurantSearchControls
