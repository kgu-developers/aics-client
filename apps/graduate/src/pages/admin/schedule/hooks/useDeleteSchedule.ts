import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteSchedule } from '~/shared/api';
import { KEYS } from '~/shared/constants';

export function useDeleteSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.SCHEDULE_LIST] });
    },
  });
}
