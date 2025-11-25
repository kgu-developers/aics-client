import { KEYS } from '~/shared/constants';

export const getAccessToken = (): string | null => {
  return localStorage.getItem(KEYS.ACCESS_TOKEN);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(KEYS.REFRESH_TOKEN);
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem(KEYS.ACCESS_TOKEN, token);
};

export const setRefreshToken = (token: string): void => {
  localStorage.setItem(KEYS.REFRESH_TOKEN, token);
};

export const clearTokens = (): void => {
  localStorage.removeItem(KEYS.ACCESS_TOKEN);
  localStorage.removeItem(KEYS.REFRESH_TOKEN);
};
