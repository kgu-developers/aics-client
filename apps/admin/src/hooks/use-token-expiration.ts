import { useEffect, useState } from 'react';
import { getAccessToken } from '~/utils/api';
import { authServices } from '~/utils/auth';
import { decodeJwt } from '~/utils/jwt';

export const useTokenExpiration = () => {
  const { logout } = authServices();
  const [expireTime, setExpireTime] = useState<number | null>(null);
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      const decoded = decodeJwt(accessToken);
      if (decoded?.exp) {
        const expiresIn = decoded.exp * 1000 - Date.now();
        setExpireTime(expiresIn);
      }
    }
  }, [accessToken]);

  useEffect(() => {
    if (expireTime !== null && expireTime <= 0) {
      logout();
    } else if (expireTime !== null && expireTime > 0) {
      const timerId = setTimeout(() => {
        setExpireTime(expireTime - 1000);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [expireTime, logout]);

  return { expireTime };
};
