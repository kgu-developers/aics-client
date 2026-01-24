import { useQuery } from '@tanstack/react-query';

import { getScheduleList } from '~/shared/api';
import { KEYS } from '~/shared/constants';

export function useScheduleList() {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE_LIST],
    queryFn: async () => {
      const response = await getScheduleList();
      return response.data.contents ?? [];
    },
  });
}
