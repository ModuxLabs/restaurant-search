import useFetch, { HookOptions } from 'react-fetch-hook'
import createFormatter from 'utils/createFormatter'

const apiKey = 'Api-Key q3MNxtfep8Gt'
const endpoint = 'https://code-challenge.spectrumtoolbox.com/api/restaurants'

interface RestaurantBase {
  id: string,
  name: string,
  address1: string,
  city: string,
  state: string,
  zip: string,
  lat: string,
  long: string,
  telephone: string,
  website: string,
  hours: string,
  attire: string
}

interface Restaurant extends RestaurantBase {
  tags: string,
  genre: string
}

interface FormattedRestaurant extends RestaurantBase {
  tags: string[],
  genre: string[]
}

const formatRestaurantData = (restaurantData: Restaurant[]): FormattedRestaurant[] => (
  restaurantData.map((restaurant: Restaurant) => ({
    ...restaurant,
    tags: restaurant.tags.split(','),
    genre: restaurant.tags.split(',')
  }))
)

export const useRestaurants = (options: HookOptions = {}) => (
  useFetch(endpoint, {
    headers: { Authorization: apiKey },
    method: 'GET',
    formatter: createFormatter<Restaurant[], FormattedRestaurant[]>(formatRestaurantData),
    ...options
  })
)
