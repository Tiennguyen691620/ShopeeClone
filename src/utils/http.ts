import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { clearAccessTokenFromLS, clearProfileFromLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from './auth'
import { AuthResponse } from 'src/types/auth.type'
import path from 'src/constants/path'

class Http {
  instance: AxiosInstance
  private accessToken: string | null
  message?: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        const result = response.data as AuthResponse
        if (url === path.login || url === path.register) {
          this.accessToken = result.data.access_token
          setAccessTokenToLS(this.accessToken)
          setProfileToLS(result.data.user)
          // this.message = result.message
          // toast.success(this.message, {autoClose: 1500})
        } else if (url === path.logout) {
          this.accessToken = ''
          clearAccessTokenFromLS()
          clearProfileFromLS()
          // this.message = result.message
          // toast.success(this.message, {autoClose: 1500})
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        console.log(error)
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
