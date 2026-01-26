import type { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';

export async function fetchScheduleContent(
  submissionType: SubmissionType,
): Promise<AxiosResponse<{ content: string }>> {
  return get<{ content: string }>({
    request: END_POINT.USER.SCHEDULE_CONTENT(submissionType),
  });
}
