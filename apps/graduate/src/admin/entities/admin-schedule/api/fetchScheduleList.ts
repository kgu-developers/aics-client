import { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import { ScheduleItem } from '~/admin/pages/schedule/model';

export interface ScheduleListResponse {
  contents: ScheduleItem[];
}

export async function fetchScheduleList(): Promise<
  AxiosResponse<ScheduleListResponse>
> {
  return get<ScheduleListResponse>({
    request: END_POINT.USER.SCHEDULE_LIST,
  });
}
