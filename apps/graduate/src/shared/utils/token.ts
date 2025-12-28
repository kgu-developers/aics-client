import { KEYS, type Role } from '~/shared/constants';

import { decrypt, encrypt } from './crypto';

export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem(KEYS.ACCESS_TOKEN);
  if (!accessToken) return null;
  return decrypt(accessToken);
};

export const getRefreshToken = (): string | null => {
  const refreshToken = localStorage.getItem(KEYS.REFRESH_TOKEN);
  if (!refreshToken) return null;
  return decrypt(refreshToken);
};

export const getRole = (): Role | null => {
  const role = localStorage.getItem(KEYS.ROLE);
  if (!role) return null;
  return decrypt(role) as Role;
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(KEYS.ACCESS_TOKEN, encrypt(token));
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(KEYS.REFRESH_TOKEN, encrypt(token));
};

export const setRole = (role: Role): void => {
  localStorage.setItem(KEYS.ROLE, encrypt(role));
};

export const clearTokens = (): void => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN);
  localStorage.removeItem(KEYS.REFRESH_TOKEN);
  localStorage.removeItem(KEYS.ROLE);
};
