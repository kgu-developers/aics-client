import { END_POINT } from '~/constants/api';
import type { ContentsResponse } from '~/types/api';
import { http } from '~/utils/http';

interface Club {
  name: string;
  description: string;
  site?: string;
  image?: string;
}

async function getClubs() {
  return http.get<ContentsResponse<Club[]>>(END_POINT.CLUBS);
}

export { type Club, getClubs };
