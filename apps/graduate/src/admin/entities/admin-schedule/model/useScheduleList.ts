import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { fetchScheduleList } from '../api/fetchScheduleList';

export function useScheduleList() {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE_LIST],
    queryFn: async () => {
      const response = await fetchScheduleList();
      return response.data.contents ?? [];
    },
  });
}
