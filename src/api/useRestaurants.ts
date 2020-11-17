import useFetch, { HookOptions } from 'react-fetch-hook'
import createFormatter from 'utils/createFormatter'

// NOTE: In a real production app I would store the api key and uri base in an .env file
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

export interface Restaurant extends RestaurantBase {
  tags: string,
  genre: string
}

export interface FormattedRestaurant extends RestaurantBase {
  tags: string[],
  genre: string[]
}

const formatRestaurantData = (restaurantData: Restaurant[]): FormattedRestaurant[] => (
  restaurantData.map((restaurant: Restaurant) => ({
    ...restaurant,
    tags: restaurant.tags.split(','),
    genre: restaurant.tags.split(',')
  })).sort((a, b) => a.name > b.name ? 1 : -1)
)

export const useRestaurants = (options: HookOptions = {}) => (
  useFetch<FormattedRestaurant[]>(endpoint, {
    headers: { Authorization: apiKey },
    method: 'GET',
    formatter: createFormatter<Restaurant[], FormattedRestaurant[]>(formatRestaurantData),
    ...options
  })
)
