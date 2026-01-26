import { AxiosResponse } from 'axios';

import { get } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

import { ScheduleItem } from '~/admin/pages/schedule/model';
type ScheduleDetailResponse = ScheduleItem;

export async function fetchScheduleDetail(
  scheduleId: number,
): Promise<AxiosResponse<ScheduleDetailResponse>> {
  return get<ScheduleDetailResponse>({
    request: END_POINT.USER.SCHEDULE(scheduleId),
  });
}
