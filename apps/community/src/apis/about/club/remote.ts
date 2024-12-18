import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Club {
  name: string;
  description: string;
  link?: string;
  image?: string;
}

function getClubs() {
  return http.get<Club[]>(MOCK_END_POINT.CLUB);
}

export { type Club, getClubs };
