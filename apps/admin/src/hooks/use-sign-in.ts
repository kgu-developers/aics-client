import { useMutation } from '@tanstack/react-query';
import { END_POINT } from '~/constants/api';
import { authHttp } from '~/utils/http';
import { useAuth } from './use-auth';

interface SignInData {
  userId: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const useSignIn = () => {
  const { setTokens } = useAuth();

  return useMutation({
    mutationFn: (data: SignInData) => {
      return authHttp.post(END_POINT.SIGN_IN, { json: data }).json<Tokens>();
    },
    onSuccess: (token) => {
      console.log('success : ', token);
      setTokens(token);
    },
  });
};

export { type Tokens, useSignIn };
