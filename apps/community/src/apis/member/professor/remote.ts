import { END_POINT } from '~/constants/api';
import type { BaseResponse } from '~/types/api';

interface Professor {
  id: number;
  name: string;
  img?: string;
  type: string;
  contact: string;
  email: string;
  officeLoc: string;
}

async function getProfessors(): Promise<BaseResponse<Professor[]>> {
  const res = await fetch(END_POINT.PROFESSORS);
  return res.json();
}

export { type Professor, getProfessors };
