import { useQuery } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';

import { fetchScheduleDetail } from '../api';

export function useScheduleDetail(scheduleId: number) {
  return useQuery({
    queryKey: scheduleKeys.detail(scheduleId),
    queryFn: async () => {
      const response = await fetchScheduleDetail(scheduleId);
      return response.data;
    },
    enabled: !!scheduleId,
  });
}
