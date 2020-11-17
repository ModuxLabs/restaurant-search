import { useMemo } from 'react'

import { FormattedRestaurant } from 'api'

import { RestaurantSearchControlData } from './components/RestaurantSearchControls'

export const useFilteredData = (
  restaurants?: FormattedRestaurant[],
  controlData?: RestaurantSearchControlData
) => (
  useMemo(() => {
    if (!restaurants) return []
    if (!controlData) return restaurants

    return restaurants.reduce<FormattedRestaurant[]>((filtered, restaurant) => {
      const matchesSearch = (
        !controlData.textSearch || (
          restaurant.name.match(new RegExp(controlData.textSearch, 'i')) ||
          restaurant.city.match(new RegExp(controlData.textSearch, 'i')) ||
          restaurant.genre.join('').match(new RegExp(controlData.textSearch, 'i'))
        )
      )

      if (!matchesSearch) return filtered

      const matchesState = (
        !controlData.stateSelect ||
        controlData.stateSelect === restaurant.state
      )

      if (!matchesState) return filtered

      const matchesGenre = (
        !controlData.genreSelect ||
        restaurant.genre.find(genre => genre === controlData.genreSelect)
      )

      if (!matchesGenre) return filtered

      return [
        ...filtered,
        restaurant
      ]
    }, [])
  }, [restaurants, controlData])
)
