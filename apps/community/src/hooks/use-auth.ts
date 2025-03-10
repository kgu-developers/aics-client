import { useMutation } from '@tanstack/react-query';

import {
  ACCESS_TOKEN_KEY,
  END_POINT,
  REFRESH_TOKEN_KEY,
} from '~/constants/api';

import type { Tokens } from '~/hooks/use-sign-in';
import { getToken } from '~/utils/api';

import { removeTokens } from '~/utils/api';
import { http } from '~/utils/http';

import { decodeJwt } from '~/utils/jwt';

const useAuth = () => {
  const [accessToken, refreshToken] = getToken();

  const decoded = decodeJwt(accessToken ?? '');

  const expiresIn = decoded.exp * 1000 - Date.now();

  const silentRefresh = useMutation({
    mutationFn: () => {
      if (!accessToken || !refreshToken) {
        throw new Error('Tokens are missing');
      }

      return http.post<Tokens, Tokens>(END_POINT.REISSUE, {
        accessToken,
        refreshToken,
      });
    },
    onSuccess: (tokens) => {
      setTokens(tokens);
    },
    onError: () => {
      alert('세션이 만료되어 로그아웃합니다.');
      logout();
    },
  });

  const setTokens = (tokens: Tokens) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);

    setTimeout(() => {
      silentRefresh.mutate();
    }, expiresIn);
  };

  const logout = () => {
    removeTokens();
  };

  return { setTokens, logout };
};

export { useAuth };
