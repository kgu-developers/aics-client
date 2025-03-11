import { useMutation } from '@tanstack/react-query';

import {
  ACCESS_TOKEN_KEY,
  END_POINT,
  REFRESH_TOKEN_KEY,
} from '~/constants/api';

import type { Tokens } from '~/hooks/use-sign-in';
import { getToken } from '~/utils/token';

import { http } from '~/utils/http';
import { removeTokens } from '~/utils/token';

import { decodeJwt } from '~/utils/jwt';

const useAuth = () => {
  const [accessToken, refreshToken] = getToken();

  const setTokens = (tokens: Tokens) => {
    if (!tokens.accessToken || !tokens.refreshToken) {
      console.log('토큰이 존재하지 않음');
      return;
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);

    const decoded = decodeJwt(tokens.accessToken);

    if (!decoded || !decoded.exp) {
      console.log('잘못된 jwt 토큰');
      return;
    }

    const expiresIn = decoded.exp * 1000 - Date.now();

    setTimeout(() => {
      silentRefresh.mutate();
    }, expiresIn);
  };

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

  const logout = () => {
    removeTokens();
  };

  return { setTokens, logout };
};

export { useAuth };
