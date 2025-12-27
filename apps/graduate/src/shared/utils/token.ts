import { KEYS, type Role } from '~/shared/constants';

export const getAccessToken = (): string | null => {
  return localStorage.getItem(KEYS.ACCESS_TOKEN);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(KEYS.REFRESH_TOKEN);
};

export const getRole = (): Role | null => {
  const role = localStorage.getItem(KEYS.ROLE);
  return role as Role | null;
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(KEYS.ACCESS_TOKEN, token);
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(KEYS.REFRESH_TOKEN, token);
};

export const setRole = (role: Role): void => {
  localStorage.setItem(KEYS.ROLE, role);
};

export const clearTokens = (): void => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN);
  localStorage.removeItem(KEYS.REFRESH_TOKEN);
  localStorage.removeItem(KEYS.ROLE);
};
