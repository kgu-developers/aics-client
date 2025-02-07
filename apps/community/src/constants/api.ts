const MOCK_BASE_URL = 'http://localhost:3000/api/mock';

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

const END_POINT = {
  POST: `${API_BASE_URL}/posts`,
  CAROUSEL: `${API_BASE_URL}/carousels`,
  LABS: `${API_BASE_URL}/labs`,
  SIGN_IN: `${API_BASE_URL}/auth/login`,
  PROFESSORS: `${API_BASE_URL}/professors`,
  CLUBS: `${API_BASE_URL}/clubs`,
};

export { MOCK_BASE_URL, MOCK_END_POINT, API_BASE_URL, END_POINT };
