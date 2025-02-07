// 추후 삭제 예정
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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API_URL;

const END_POINT = {
  POST: `${API_BASE_URL}/posts`,
  CAROUSEL: `${API_BASE_URL}/carousels`,
  LABS: `${API_BASE_URL}/labs`,
  SIGN_IN: `${AUTH_BASE_URL}/login`,
  PROFESSORS: `${API_BASE_URL}/professors`,
  CLUBS: `${API_BASE_URL}/clubs`,
};

export {
  MOCK_BASE_URL,
  API_BASE_URL,
  AUTH_BASE_URL,
  MOCK_END_POINT,
  END_POINT,
};
