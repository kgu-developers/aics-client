import { useQuery } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { getScheduleList } from '~/admin/shared/api';

export function useScheduleList() {
  return useQuery({
    queryKey: [...KEYS.SCHEDULE_LIST],
    queryFn: async () => {
      const response = await getScheduleList();
      return response.data.contents ?? [];
    },
  });
}
