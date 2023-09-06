import { Auth } from 'src/types/auth.type'
import http from 'src/utils/http'

type authType = {
  email: string
  password: string
}

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<Auth>('/register', body)
}

export const login = (body: { email: string; password: string }) => {
  return http.post<Auth>('/login', body)
}
