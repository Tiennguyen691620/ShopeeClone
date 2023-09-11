export const saveAccessTokenToLS = (access_token: string) => {
  return localStorage.setItem('access_token',access_token)
}

export const clearAccessTokenFromLS = () => {
  return localStorage.removeItem('access_token')
} 

export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access_token' || '')
}