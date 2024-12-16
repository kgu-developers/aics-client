import { MOCK_END_POINT } from '~/constants/api';
import type { Lab } from '~/types/lab';
import { http } from '~/utils/http';

class LabService {
  getLabs() {
    return http.get<Lab[]>(MOCK_END_POINT.LABS);
  }
}

export default new LabService();
