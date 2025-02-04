import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Dept {
  name: string;
  description: string;
  educationGoals: string[];
}

function getDepts() {
  return http.get<Dept[]>(MOCK_END_POINT.DEPT);
}

export { type Dept, getDepts };
