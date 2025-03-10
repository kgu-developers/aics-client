import {
  ACCESS_TOKEN_KEY,
  END_POINT,
  REFRESH_TOKEN_KEY,
} from '~/constants/api';

import type { Tokens } from '~/hooks/use-sign-in';
import { getToken, removeTokens } from '~/utils/api';
import { http } from '~/utils/http';
import { decodeJwt } from '~/utils/jwt';

const useAuth = () => {
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

    if (expiresIn <= 0) {
      logout();
      return;
    }

    setTimeout(() => {
      logout();
    }, expiresIn);
  };

  const refreshTokens = async () => {
    const [accessToken, refreshToken] = getToken();

    if (!accessToken || !refreshToken) {
      logout();
      return;
    }

    try {
      const newTokens = await http
        .post(END_POINT.REISSUE, { json: { accessToken, refreshToken } })
        .json<Tokens>();
      setTokens(newTokens);
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  const logout = () => {
    removeTokens();
  };

  return { setTokens, logout, refreshTokens };
};

export { useAuth };
