import { END_POINT } from '~/constants/api';
import type { BaseResponse } from '~/types/api';

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

async function getLabs(): Promise<BaseResponse<Lab[]>> {
  const res = await fetch(END_POINT.LABS);
  return res.json();
}

export { type Lab, getLabs };
