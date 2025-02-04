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

export { MOCK_BASE_URL, MOCK_END_POINT };
