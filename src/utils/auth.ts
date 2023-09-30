import { User } from "src/types/user.type"

export const setAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem('access_token',access_token)
}

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token' || '')
}

export const clearAccessTokenFromLS = () => {
  return localStorage.removeItem('access_token')
} 

export const setProfileToLS = (profile: User) => {
  return localStorage.setItem('profile',JSON.stringify(profile))
}

export const getProfileFromLS = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const clearProfileFromLS = () => {
  return localStorage.removeItem('profile')
}