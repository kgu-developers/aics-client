import { useNavigate } from '@tanstack/react-router'

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '~/constants/api'
import { decodeJwt, removeTokens } from '~/shared/utils'

import type { Tokens } from '~/hooks/use-sign-in'

const authServices = () => {
  const navigate = useNavigate()
  const setTokens = (tokens: Tokens) => {
    if (!tokens.accessToken || !tokens.refreshToken) {
      console.log('토큰이 존재하지 않습니다')
      return
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken)
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken)

    const decoded = decodeJwt(tokens.accessToken)

    if (!decoded || !decoded.exp) {
      console.log('잘못된 토큰입니다.')
      return
    }
  }

  const logout = () => {
    removeTokens()
    navigate({ to: '/' })
  }

  return { setTokens, logout }
}

export { authServices }
