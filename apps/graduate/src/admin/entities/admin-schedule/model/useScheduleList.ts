import { useQuery } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';

import { fetchScheduleList } from '../api/fetchScheduleList';

export function useScheduleList() {
  return useQuery({
    queryKey: scheduleKeys.list(),
    queryFn: async () => {
      const response = await fetchScheduleList();
      return response.data.contents ?? [];
    },
  });
}
