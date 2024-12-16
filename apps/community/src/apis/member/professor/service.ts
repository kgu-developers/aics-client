import { MOCK_END_POINT } from '~/constants/api';
import type { Professor } from '~/types/professor';
import { http } from '~/utils/http';

class ProfessorService {
  getProfessors() {
    return http.get<Professor[]>(MOCK_END_POINT.PROFESSORS);
  }
}

export default new ProfessorService();
