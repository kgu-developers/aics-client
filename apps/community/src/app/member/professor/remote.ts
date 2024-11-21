import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Professor {
  id: number;
  name: string;
  img?: string;
  type: string;
  contact: string;
  email: string;
}

function getProfessors() {
  return http.get<Professor[]>(MOCK_END_POINT.PROFESSORS);
}

export { type Professor, getProfessors };
