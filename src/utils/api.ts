import axios, { InternalAxiosRequestConfig } from 'axios'

import get from 'lodash/get'
import { toast } from 'react-toastify'
import config from 'config'

export const DEFAULT_ERROR =
  'Произошла неизвестная ошибка. Обновите страницу или повторите попытку позже.'
const axiosInstance = axios.create({
  baseURL: config.REACT_APP_API_URL,
  responseType: 'json',
  timeout: config.TIMEOUT_REQUEST,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const contentType = config.method === 'post' ? { 'content-type': 'application/json' } : {}
    return {
      ...config,
      headers: {
        ...contentType,
        ...config.headers,
      },
    } as InternalAxiosRequestConfig
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const parseErrors = get(error, 'response.error')

    if (!parseErrors) {
      toast.error(get(error, 'response.data.message', DEFAULT_ERROR))
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
