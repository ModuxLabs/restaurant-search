import React, { FC } from 'react'

import { FormattedRestaurant } from 'api'
import Table from 'components/Table'

enum RestaurantTableHeaders {
  name = 'Name',
  city = 'City',
  state = 'state',
  telephone = 'Phone Number',
  genres = 'Cuisine Types'
}

interface RestaurantTableProps {
  isLoading: boolean,
  data?: FormattedRestaurant[],
  error?: any
}

const RestaurantTable: FC<RestaurantTableProps> = props => {
  return (
    <Table
      {...props}
      headers={RestaurantTableHeaders}
    />
  )
}

export default RestaurantTable
