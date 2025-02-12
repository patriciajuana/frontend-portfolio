import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import portfolioItemsData from '@/data/portfolioItemsData'

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://patriciajuana.github.io/', // Fake API base URL
  timeout: 1000,
})

// Create a Mock Adapter instance
const mock = new MockAdapter(api, { delayResponse: 0 }) // Delay for realism

// Mock GET request for all portfolio items or selective from `ids` query param
mock.onGet('/portfolio-items').reply((config) => {
  // Extract the 'ids' query parameter (comma-separated IDs)
  const ids = config.params?.ids?.split(',')

  // If no IDs are provided, return all items
  if (!ids) {
    return [200, portfolioItemsData]
  }

  // Find items that match the provided IDs
  const items = portfolioItemsData.filter((e) => ids.includes(e.id))

  // If no items are found, return a 404
  if (items.length === 0) {
    return [404, { message: 'Items Not Found' }]
  }

  // Return the found items
  return [200, items]
})

export default api
