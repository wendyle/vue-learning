import axios from 'axios'
const requestService = axios.create({
  timeout: 5000
})

// respone interceptor
requestService.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.error('[response error]: ', error)
    return Promise.reject(error)
  }
)

export default requestService
