import { AxiosResponse } from 'axios';

import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { SubmissionType } from '~/shared/types';

export interface UpdateScheduleContentRequest {
  content: string;
}
export async function updateScheduleContent(
  submissionType: SubmissionType,
  data: UpdateScheduleContentRequest,
): Promise<AxiosResponse<{ content: string }>> {
  return patch<{ content: string }, UpdateScheduleContentRequest>({
    request: END_POINT.ADMIN.SCHEDULE_CONTENT_UPDATE(submissionType),
    data,
  });
}
