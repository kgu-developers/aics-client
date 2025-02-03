import { END_POINT, MOCK_END_POINT } from '~/constants/api';
import type { BaseResponse } from '~/types/api';

interface Club {
  name: string;
  description: string;
  site?: string;
  image?: string;
}

async function getClubs(): Promise<BaseResponse<Club[]>> {
  const res = await fetch(END_POINT.CLUBS);
  return res.json();
}

export { type Club, getClubs };
