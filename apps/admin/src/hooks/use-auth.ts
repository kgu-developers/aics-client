import { useMutation } from '@tanstack/react-query';
import {
  ACCESS_TOKEN_KEY,
  END_POINT,
  REFRESH_TOKEN_KEY,
} from '~/constants/api';

import type { Tokens } from '~/hooks/use-sign-in';
import { useToken } from './use-token';

import { removeTokens } from '~/utils/api';
import { http } from '~/utils/http';

const JWT_EXPIRY_TIME = 1800 * 1000 - 60 * 1000;

const useAuth = () => {
  const [accessToken, refreshToken] = useToken();

  const silentRefresh = useMutation({
    mutationFn: () => {
      if (!accessToken || !refreshToken) {
        throw new Error('Tokens are missing');
      }

      return http
        .post(END_POINT.REISSUE, { json: { accessToken, refreshToken } })
        .json<Tokens>();
    },
    onSuccess: (tokens) => {
      setTokens(tokens);
    },
    onError: () => {
      alert('⚠️ 세션이 만료되어 로그아웃합니다.');
      logout();
    },
  });

  const setTokens = (tokens: Tokens) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);

    setTimeout(() => {
      silentRefresh.mutate();
    }, JWT_EXPIRY_TIME);
  };

  const logout = () => {
    removeTokens();
  };

  return { setTokens, logout, accessToken, refreshToken };
};

export { useAuth };
