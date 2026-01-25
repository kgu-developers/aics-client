import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Dayjs } from 'dayjs';

import { updateSchedule } from '~/shared/api';
import { KEYS, DATE_FORMAT } from '~/shared/constants';
import { UpdateScheduleRequest } from '~/shared/types';

interface UseUpdateScheduleParams {
  scheduleId: number;
  data: {
    startDate: Dayjs;
    endDate: Dayjs;
  };
}

export function useUpdateSchedule() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ scheduleId, data }: UseUpdateScheduleParams) => {
      const requestData: UpdateScheduleRequest = {
        ...data,
        startDate: data.startDate.format(DATE_FORMAT.ISO_DATETIME),
        endDate: data.endDate.endOf('day').format(DATE_FORMAT.ISO_DATETIME),
      };
      return updateSchedule(scheduleId, requestData);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.SCHEDULE_LIST] });
      queryClient.invalidateQueries({
        queryKey: [...KEYS.SCHEDULE, variables.scheduleId],
      });
    },
  });
}
