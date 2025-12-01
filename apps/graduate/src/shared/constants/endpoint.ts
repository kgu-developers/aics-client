export const ENV_API_URL =
  import.meta.env.VITE_API_URL || 'https://aics-api.ummdev.com/';

export const END_POINT = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    SIGNUP: '/api/v1/users/signup',
    REFRESH: '/api/v1/auth/reissue',
  },
} as const;
