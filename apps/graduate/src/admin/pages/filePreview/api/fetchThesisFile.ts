import { AxiosResponse } from 'axios';

import { get } from '~/shared/api/axios';
import { END_POINT } from '~/shared/constants';

export interface ThesisFileResponse {
  id: number;
  scheduleId: number;
  approval: boolean;
  thesisFile: {
    id: number;
    physicalPath: string;
  };
}

export async function fetchThesisFile(
  thesisId: number,
): Promise<AxiosResponse<ThesisFileResponse>> {
  return get<ThesisFileResponse>({
    request: END_POINT.ADMIN.THESIS_FILE(thesisId),
  });
}
