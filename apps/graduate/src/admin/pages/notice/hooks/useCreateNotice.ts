import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';
import type { CreateNoticeRequest } from '~/shared/types';

import { createNotice } from '~/admin/shared/api';

export function useCreateNotice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ fileId, ...data }: CreateNoticeRequest) =>
      createNotice(data, fileId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.NOTICE, 'list'] });
    },
  });
}
