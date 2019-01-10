import axios from 'axios'
import store from '@/store'
import httpCode from './httpCode'

const requestService = axios.create({
  baseURL: '/sentosa/v1',
  timeout: 120000
})

let requestTimes = 0
requestService.interceptors.request.use(
  config => {
    store.commit('toggleLoading', true)
    ++requestTimes
    return config
  },
  error => {
    store.commit('toggleLoading', false)
    --requestTimes
    console.error('[request error]: ', error)
    Promise.reject(error)
  }
)

requestService.interceptors.response.use(
  response => {
    !--requestTimes && store.commit('toggleLoading', false)
    if (response.data && response.data.code === 200) {
      return response.data.data
    }
    return Promise.reject(response.data.message)
  },
  error => {
    !--requestTimes && store.commit('toggleLoading', false)
    return Promise.reject(httpCode[error.response.status])
  }
)

export default requestService
