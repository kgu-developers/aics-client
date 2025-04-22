import { MOCK_END_POINT } from '~/constants/api';
import type { ContentsResponse } from '~/types/api';
import { http } from '~/utils/http';

interface Dept {
  name: string;
  description: string;
  educationGoals: string[];
}

function getDepts() {
  return http.get<ContentsResponse<Dept[]>>(MOCK_END_POINT.DEPT);
}

export { type Dept, getDepts };
