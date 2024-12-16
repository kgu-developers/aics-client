import { MOCK_END_POINT } from '~/constants/api';
import type { Dept } from '~/types/dept';
import { http } from '~/utils/http';

class DeptService {
  getDepts() {
    return http.get<Dept[]>(MOCK_END_POINT.DEPT);
  }
}

export default new DeptService();
