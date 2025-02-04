import { END_POINT } from '~/constants/api';
import { http } from '~/utils/http';

interface Lab {
  id: number;
  name: string;
  loc: string;
  site: string;
  advisor: string;
  file?: {
    id: number;
    physicalPath?: string;
  };
}

async function getLabs() {
  return http.get<Lab[]>(END_POINT.LABS);
}

export { type Lab, getLabs };
