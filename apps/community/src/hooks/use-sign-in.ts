import { useMutation } from '@tanstack/react-query';
import type { z } from 'zod';

import { END_POINT } from '~/constants/api';
import type { signInFormSchema } from '~/schemas/sign-in-form-schema';
import { http } from '~/utils/http';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export function useSignIn() {
  return useMutation({
    mutationFn: async (data: z.infer<typeof signInFormSchema>) => {
      const res = await http.post<typeof data, Tokens>(END_POINT.SIGN_IN, data);
      return res;
    },
    onSuccess: (token) => {
      console.log(token);
    },
  });
}
