import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createSchedule } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import { CreateScheduleRequest } from '~/shared/types';

export function useCreateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateScheduleRequest) => createSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.SCHEDULE_LIST] });
    },
  });
}
