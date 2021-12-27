import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID SMP6O6q-sJI7Nfa2JtTTzHNuznht8BX6Qi8CF7jCuOg',
  },
})
