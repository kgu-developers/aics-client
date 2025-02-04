import { MOCK_END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Lab {
  id: number;
  name: string;
  location: string;
  site: string;
  professor: string;
  img?: string;
}

function getLabs() {
  return http.get<Lab[]>(MOCK_END_POINT.LABS);
}

export { type Lab, getLabs };
