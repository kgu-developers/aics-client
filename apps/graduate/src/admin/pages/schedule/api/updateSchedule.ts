import { AxiosResponse } from 'axios';

import { patch } from '~/shared/api';
import { END_POINT } from '~/shared/constants';
import { UpdateScheduleRequest } from '~/shared/types';

import { ScheduleItem } from '../model';

export async function updateSchedule(
  scheduleId: number,
  data: UpdateScheduleRequest,
): Promise<AxiosResponse<ScheduleItem>> {
  return patch<ScheduleItem, UpdateScheduleRequest>({
    request: END_POINT.ADMIN.SCHEDULE_UPDATE(scheduleId),
    data,
  });
}
