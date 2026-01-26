import { useMutation, useQueryClient } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';
import { CreateScheduleRequest } from '~/shared/types';

import { submitSchedule } from '../api';

export function useCreateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateScheduleRequest) => submitSchedule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKeys.lists() });
    },
  });
}
