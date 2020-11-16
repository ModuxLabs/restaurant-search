import React from 'react'
import { IconContext } from 'react-icons'

// Usually this is where I set up the router, but since this challenge is
// essentially one route, I am just importing the example "route" directly.
import RestaurantSearch from 'routes/RestaurantSearch'

const AppComponent: React.FC = () => {
  return (
    <IconContext.Provider value={{}}>
      <RestaurantSearch />
    </IconContext.Provider>
  )
}

export default AppComponent
