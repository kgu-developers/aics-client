import { useMutation, useQueryClient } from '@tanstack/react-query';

import { scheduleKeys } from '~/shared/queries/schedule';

import { removeSchedule } from '../api';

export function useDeleteSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => removeSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: scheduleKeys.lists() });
    },
  });
}
