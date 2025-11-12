export const CLUB_ENDPOINT = {
  LIST: 'clubs',
  DETAIL: (id: number | string) => `clubs/${id}`,
} as const;
const MOCK_BASE_URL = 'http://58.238.255.245:8080/api/v1';
export const MOCK_CLUB_ENDPOINT = {
  LIST: `${MOCK_BASE_URL}/about/club`,
} as const;
