import { useQuery } from '@tanstack/react-query';

import { getScheduleDetail } from '~/shared/api';
import { KEYS } from '~/shared/constants';

export function useScheduleDetail(scheduleId: number) {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE, scheduleId],
    queryFn: async () => {
      const response = await getScheduleDetail(scheduleId);
      return response.data;
    },
    enabled: !!scheduleId,
  });
}
