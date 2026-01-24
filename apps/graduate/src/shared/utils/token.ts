import { STORAGE_KEYS, type Role } from '~/shared/constants';

import { decrypt, encrypt } from './crypto';

export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  if (!accessToken) return null;
  return decrypt(accessToken);
};

export const getRefreshToken = (): string | null => {
  const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  if (!refreshToken) return null;
  return decrypt(refreshToken);
};

export const getRole = (): Role | null => {
  const role = localStorage.getItem(STORAGE_KEYS.ROLE);
  if (!role) return null;
  return decrypt(role) as Role;
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, encrypt(token));
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, encrypt(token));
};

export const setRole = (role: Role): void => {
  localStorage.setItem(STORAGE_KEYS.ROLE, encrypt(role));
};

export const clearTokens = (): void => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.ROLE);
};
