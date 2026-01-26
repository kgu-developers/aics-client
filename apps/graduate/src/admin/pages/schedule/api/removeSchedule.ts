import { AxiosResponse } from 'axios';

import { del } from '~/shared/api';
import { END_POINT } from '~/shared/constants';

export async function removeSchedule(
  scheduleId: number,
): Promise<AxiosResponse<void>> {
  return del<void>({
    request: END_POINT.ADMIN.SCHEDULE_DELETE(scheduleId),
  });
}
