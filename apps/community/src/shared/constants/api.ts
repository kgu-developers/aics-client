const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;

const END_POINT = {
  ABOUTS: `${API_BASE_URL}/abouts`,
  POST: `${API_BASE_URL}/posts`,
  POST_DETAIL: (id: string) => `${API_BASE_URL}/posts/${id}`,
  CAROUSEL: `${API_BASE_URL}/carousels`,
  LABS: `${API_BASE_URL}/labs`,
  SIGN_IN: `${AUTH_BASE_URL}/login`,
  SIGN_UP: `${API_BASE_URL}/users/signup`,
  REISSUE: `${AUTH_BASE_URL}/reissue`,
  PROFESSORS: `${API_BASE_URL}/professors`,
  CLUBS: `${API_BASE_URL}/clubs`,
  MY_PROFILE: `${API_BASE_URL}/users/my`,
  EDIT_MY_PROFILE: `${API_BASE_URL}/users`,
  CHANGE_PASSWORD: `${API_BASE_URL}/users/password`,
};

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export {
  API_BASE_URL,
  AUTH_BASE_URL,
  END_POINT,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
};
