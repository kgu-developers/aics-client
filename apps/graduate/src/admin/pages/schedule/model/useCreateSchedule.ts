import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import { CreateScheduleRequest } from '~/shared/types';

import { createSchedule } from '~/admin/shared/api';

export function useCreateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateScheduleRequest) => createSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.SCHEDULE_LIST] });
    },
  });
}
