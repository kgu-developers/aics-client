import { END_POINT } from '~/constants/api';
import { http } from '~/utils/http';
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

function getProfessors() {
  return http.get<BaseResponse<Professor[]>>(END_POINT.PROFESSORS);
}

export { type Professor, getProfessors };
