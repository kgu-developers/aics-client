import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { fetchScheduleDetail } from '../api';

export function useScheduleDetail(scheduleId: number) {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE, scheduleId],
    queryFn: async () => {
      const response = await fetchScheduleDetail(scheduleId);
      return response.data;
    },
    enabled: !!scheduleId,
  });
}
