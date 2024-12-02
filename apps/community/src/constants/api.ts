const MOCK_BASE_URL = 'http://localhost:3000/api/mock';

const MOCK_END_POINT = {
  LABS: `${MOCK_BASE_URL}/labs`,
  DEPT: `${MOCK_BASE_URL}/dept`,
  PROFESSORS: `${MOCK_BASE_URL}/professors`,
  CLUB: `${MOCK_BASE_URL}/about/club`,
  CONTACT: `${MOCK_BASE_URL}/about/contact`,
  USERS: `${MOCK_BASE_URL}/users`,
  BOARD: `${MOCK_BASE_URL}/board`,
  BOARD_DETAIL: `${MOCK_BASE_URL}/board/detail`,
} as const;

export { MOCK_BASE_URL, MOCK_END_POINT };
