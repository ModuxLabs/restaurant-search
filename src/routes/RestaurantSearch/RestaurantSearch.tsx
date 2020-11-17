import React, { FC, useState } from 'react'

import { useRestaurants } from 'api'
import ContentWithSidebar, { Header, Sidebar, MainContent, Body } from 'layouts/ContentWithSidebar'

import RestaurantSearchControls, { RestaurantSearchControlData } from './components/RestaurantSearchControls'
import RestaurantSearchHeader from './components/RestaurantSearchHeader'
import RestaurantTable from './components/RestaurantTable'
import { useFilteredData } from './RestaurantSearch.hooks'

const RestaurantSearch: FC = () => {
  const [controlData, setControlData] = useState()
  const { data, isLoading, error } = useRestaurants()

  const handleSearchSubmit = (controlData: RestaurantSearchControlData) => {
    setControlData(controlData)
  }

  const filteredData = useFilteredData(data, controlData)

  return (
    <ContentWithSidebar>
      <Header>
        <RestaurantSearchHeader />
      </Header>
      <Body>
        <Sidebar>
          <RestaurantSearchControls
            onSubmit={handleSearchSubmit}
          />
        </Sidebar>
        <MainContent>
          <RestaurantTable
            data={filteredData}
            error={error}
            isLoading={isLoading}
          />
        </MainContent>
      </Body>
    </ContentWithSidebar>
  )
}

export default RestaurantSearch
