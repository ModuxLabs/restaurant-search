import React from 'react'

import { useRestaurants } from 'api'
import ContentWithSidebar, { Header, Sidebar, MainContent } from 'layouts/ContentWithSidebar'

import RestaurantSearchControls from './components/RestaurantSearchControls'
import RestaurantSearchHeader from './components/RestaurantSearchHeader'
import RestaurantTable from './components/RestaurantTable'

const RestaurantSearch: React.FC = () => {
  const restaurantRes = useRestaurants()

  console.log({ restaurantRes })

  return (
    <ContentWithSidebar>
      <Header>
        <RestaurantSearchHeader />
      </Header>
      <Sidebar>
        <RestaurantSearchControls />
      </Sidebar>
      <MainContent>
        <RestaurantTable />
      </MainContent>
    </ContentWithSidebar>
  )
}

export default RestaurantSearch
