import { useRouter } from 'next/navigation'

import { useMutation } from '@tanstack/react-query'
import type { z } from 'zod'

import type { signInFormSchema } from '~/features/auth/schemas/sign-in-form-schema'
import { END_POINT } from '~/shared/constants/api'
import { useAuth } from '~/shared/hooks/use-auth'
import { http } from '~/shared/utils/http'

interface Tokens {
  accessToken: string
  refreshToken: string
}

const useSignIn = () => {
  const { setTokens } = useAuth()
  const router = useRouter()

  return useMutation({
    mutationFn: async (data: z.infer<typeof signInFormSchema>) => {
      return await http.post<typeof data, Tokens>(END_POINT.SIGN_IN, data)
    },
    onError: (e) => {
      console.log(e)
    },
    onSuccess: (token) => {
      setTokens(token)
      router.push('/')
    },
  })
}

export { type Tokens, useSignIn }
