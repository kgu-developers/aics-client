import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { getScheduleDetail } from '~/admin/shared/api';

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
