import React, { FC } from 'react'

import { useRestaurants } from 'api'
import ContentWithSidebar, { Header, Sidebar, MainContent } from 'layouts/ContentWithSidebar'

import RestaurantSearchControls from './components/RestaurantSearchControls'
import RestaurantSearchHeader from './components/RestaurantSearchHeader'
import RestaurantTable from './components/RestaurantTable'

const RestaurantSearch: FC = () => {
  const restaurantRes = useRestaurants()

  return (
    <ContentWithSidebar>
      <Header>
        <RestaurantSearchHeader />
      </Header>
      <Sidebar>
        <RestaurantSearchControls />
      </Sidebar>
      <MainContent>
        <RestaurantTable {...restaurantRes} />
      </MainContent>
    </ContentWithSidebar>
  )
}

export default RestaurantSearch
