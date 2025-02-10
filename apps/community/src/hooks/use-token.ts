import { getAccessToken, getRefreshToken, removeTokens } from '~/utils/api';

const useToken = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken || !refreshToken) {
    removeTokens();
  }

  return [accessToken, refreshToken] as const;
};

export { useToken };
