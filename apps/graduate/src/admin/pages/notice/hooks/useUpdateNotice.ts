import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import type { UpdateNoticeRequest } from '~/shared/types';

import { updateNotice } from '~/admin/shared/api';

export function useUpdateNotice(noticeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateNoticeRequest) => updateNotice(noticeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.NOTICE, 'list'] });
      queryClient.invalidateQueries({ queryKey: [...KEYS.NOTICE, noticeId] });
    },
  });
}
