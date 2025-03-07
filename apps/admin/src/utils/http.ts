import ky from 'ky';
import { getAccessToken } from './api';
import { AUTH_BASE_URL, API_BASE_URL } from '~/constants/api';

export const http = ky.create({
  prefixUrl: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  timeout: 10000,
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = getAccessToken();
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
  },
});

export const authHttp = ky.create({
  prefixUrl: AUTH_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  timeout: 10000,
});

export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  try {
    const response = await http(url, options).json<T>();
    return response;
  } catch (error) {
    console.error('error : ', error);
    throw error;
  }
};
