import { getAccessToken, getRefreshToken, removeTokens } from '~/utils/api';

const getToken = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken || !refreshToken) {
    removeTokens();
  }

  return [accessToken, refreshToken] as const;
};

export { getToken };
