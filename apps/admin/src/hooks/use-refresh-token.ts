import { useMutation } from '@tanstack/react-query'
import { END_POINT } from '~/constants/api'
import { getToken } from '~/shared/utils/api'
import { authServices } from '~/shared/utils/auth'
import { authHttp } from '~/shared/utils/http'
import type { Tokens } from './use-sign-in'

interface RefreshToken {
  refreshToken: string
}

const useRefreshTokens = () => {
  const { setTokens, logout } = authServices()

  const refreshMutation = useMutation({
    mutationFn: () => {
      const [accessToken, refreshToken] = getToken()

      if (!accessToken || !refreshToken) {
        throw new Error('토큰이 존재하지 않습니다')
      }

      const response = authHttp.post<RefreshToken>(END_POINT.REISSUE, {
        json: { refreshToken },
      })
      return response.json<Tokens>()
    },
    onSuccess: (newTokens) => {
      setTokens(newTokens)
    },
    onError: () => {
      alert('오류가 발생하여 로그아웃합니다.')
      logout()
    },
  })

  return refreshMutation
}

export { type RefreshToken, useRefreshTokens }
