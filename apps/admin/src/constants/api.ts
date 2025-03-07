/**
 * 추후 삭제 예정
 */
const MOCK_BASE_URL = 'http://58.238.255.245:8080/api/v1';

const MOCK_END_POINT = {
  HEROES: `${MOCK_BASE_URL}/main/hero-images`,
  RECENT_NEWS: `${MOCK_BASE_URL}/main/recent-news`,
  RECENT_NOTICES: `${MOCK_BASE_URL}/main/recent-notices`,
  LABS: `${MOCK_BASE_URL}/labs`,
  DEPT: `${MOCK_BASE_URL}/dept`,
  PROFESSORS: `${MOCK_BASE_URL}/professors`,
  CLUB: `${MOCK_BASE_URL}/about/club`,
  CONTACT: `${MOCK_BASE_URL}/about/contact`,
  MY_PROFILE: `${MOCK_BASE_URL}/my`,
  BOARD: `${MOCK_BASE_URL}/board`,
  BOARD_DETAIL: (id: string) => `${MOCK_BASE_URL}/posts/${id}`,
} as const;

const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;
const AUTH_BASE_URL = import.meta.env.VITE_PUBLIC_AUTH_API_URL;

const END_POINT = {
  POST: 'posts',
  POST_DETAIL: (id: string) => `posts/${id}`,
  CAROUSEL: 'carousels',
  LABS: 'labs',
  SIGN_IN: 'login',
  REISSUE: 'reissue',
  PROFESSORS: 'professors',
  CLUBS: 'clubs',
  MY_PROFILE: 'users/my',
  EDIT_MY_PROFILE: 'users',
  CHANGE_PASSWORD: 'users/password',
};

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export {
  MOCK_BASE_URL,
  API_BASE_URL,
  AUTH_BASE_URL,
  MOCK_END_POINT,
  END_POINT,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
};
