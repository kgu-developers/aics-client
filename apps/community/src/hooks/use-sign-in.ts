import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { z } from 'zod';

import { END_POINT } from '~/constants/api';

import type { signInFormSchema } from '~/schemas/sign-in-form-schema';

import { http } from '~/utils/http';
import { useAuth } from './use-auth';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const useSignIn = () => {
  const { setTokens } = useAuth();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: z.infer<typeof signInFormSchema>) => {
      const res = http.post<typeof data, Tokens>(END_POINT.SIGN_IN, data);
      return res;
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: (token) => {
      setTokens(token);
      router.push('/');
    },
  });
};

export { type Tokens, useSignIn };
