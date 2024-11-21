const MOCK_BASE_URL = 'http://localhost:3000/api/mock';

const MOCK_END_POINT = {
  LABS: `${MOCK_BASE_URL}/labs`,
  DEPT: `${MOCK_BASE_URL}/dept`,
  CLUB: `${MOCK_BASE_URL}/about/club`,
} as const;

export { MOCK_BASE_URL, MOCK_END_POINT };
