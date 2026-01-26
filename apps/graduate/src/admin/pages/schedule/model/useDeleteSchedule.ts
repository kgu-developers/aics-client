import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { removeSchedule } from '../api';

export function useDeleteSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => removeSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.SCHEDULE_LIST] });
    },
  });
}
