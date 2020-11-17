import React, { FC } from 'react'

import { useRestaurants } from 'api'
import ContentWithSidebar, { Header, Sidebar, MainContent } from 'layouts/ContentWithSidebar'

import RestaurantSearchControls, { RestaurantSearchControlData } from './components/RestaurantSearchControls'
import RestaurantSearchHeader from './components/RestaurantSearchHeader'
import RestaurantTable from './components/RestaurantTable'

const RestaurantSearch: FC = () => {
  const restaurantRes = useRestaurants()

  const handleSearchSubmit = (formData: RestaurantSearchControlData) => {
    console.log({ formData })
  }

  return (
    <ContentWithSidebar>
      <Header>
        <RestaurantSearchHeader />
      </Header>
      <Sidebar>
        <RestaurantSearchControls
          onSubmit={handleSearchSubmit}
        />
      </Sidebar>
      <MainContent>
        <RestaurantTable {...restaurantRes} />
      </MainContent>
    </ContentWithSidebar>
  )
}

export default RestaurantSearch
