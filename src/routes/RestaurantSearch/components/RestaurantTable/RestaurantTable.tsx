import React, { FC, useMemo } from 'react'

import { FormattedRestaurant, Restaurant } from 'api'
import Table from 'components/Table'

enum RestaurantTableHeaders {
  name = 'Name',
  city = 'City',
  state = 'state',
  telephone = 'Phone Number',
  genre = 'Cuisine Types'
}

interface RestaurantTableProps {
  isLoading: boolean,
  data?: FormattedRestaurant[],
  error?: any
}

const useRestaurantTableData = (restaurants: FormattedRestaurant[] = []) => (
  useMemo<Restaurant[]>(() => (
    restaurants.map(restaurant => ({
      ...restaurant,
      genre: restaurant.genre.join(', '),
      tags: restaurant.tags.join((', '))
    }))
  ), [restaurants])
)

const RestaurantTable: FC<RestaurantTableProps> = ({ data, isLoading, error }) => {
  const restaurantTableData = useRestaurantTableData(data)

  return (
    <Table
      columnWidths={[2, 2, 2, 2, 4]}
      isLoading={isLoading}
      error={error}
      data={restaurantTableData}
      headers={RestaurantTableHeaders}
      noDataMsg='There are no restaurants that match your filters.'
    />
  )
}

export default RestaurantTable
