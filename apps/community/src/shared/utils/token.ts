import { useRouter } from 'next/navigation'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/shared/constants/api'

function getAccessToken(): string | null {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

function getRefreshToken(): string | null {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

function removeTokens() {
  if (typeof window === 'undefined') {
    return
  }
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

function getToken() {
  const accessToken = getAccessToken()
  const refreshToken = getRefreshToken()

  if (!accessToken || !refreshToken) {
    removeTokens()
  }

  return [accessToken, refreshToken] as const
}

function isValidateToken() {
  const accessToken = getAccessToken()

  if (!accessToken) {
    return false
  }

  try {
    const payload = JSON.parse(atob(accessToken.split('.')[1] ?? ''))
    const exp = payload.exp * 1000
    return Date.now() < exp
  } catch (error) {
    return false
  }
}

export {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  getToken,
  isValidateToken,
}
