import { AxiosResponse } from 'axios';

import { post } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { CreateScheduleRequest } from '~/shared/types';

import { ScheduleItem } from '../model';

export async function submitSchedule(
  data: CreateScheduleRequest,
): Promise<AxiosResponse<ScheduleItem>> {
  return post<ScheduleItem, CreateScheduleRequest>({
    request: END_POINT.ADMIN.SCHEDULE_CREATE,
    data,
  });
}
