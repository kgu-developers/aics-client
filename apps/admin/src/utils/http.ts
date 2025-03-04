import ky from 'ky';
import { getAccessToken } from './api';

export const http = ky.create({
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
