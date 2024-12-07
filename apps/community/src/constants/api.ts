const MOCK_BASE_URL = 'http://localhost:3000/api/mock';

const MOCK_END_POINT = {
  LABS: `${MOCK_BASE_URL}/labs`,
  DEPT: `${MOCK_BASE_URL}/dept`,
  PROFESSORS: `${MOCK_BASE_URL}/professors`,
  CLUB: `${MOCK_BASE_URL}/about/club`,
  CONTACT: `${MOCK_BASE_URL}/about/contact`,
  BOARD: `${MOCK_BASE_URL}/board`,
  NOTICE_DETAIL: (id: string) => `${MOCK_BASE_URL}/posts/${id}`,
} as const;

export { MOCK_BASE_URL, MOCK_END_POINT };
