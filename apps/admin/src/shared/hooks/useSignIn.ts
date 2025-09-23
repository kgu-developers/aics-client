import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { END_POINT } from '~/shared/constants/api'
import { authServices } from '~/shared/utils/auth'
import { authHttp } from '~/shared/utils/http'

interface SignInData {
  userId: string
  password: string
}

interface Tokens {
  accessToken: string
  refreshToken: string
}

const useSignIn = () => {
  const { setTokens } = authServices()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: SignInData) => {
      return authHttp.post(END_POINT.SIGN_IN, { json: data }).json<Tokens>()
    },
    onSuccess: (token) => {
      setTokens(token)
      navigate({ to: '/main' })
    },
  })
}

export { type Tokens, useSignIn }
