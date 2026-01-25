import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createNotice } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import type { CreateNoticeRequest } from '~/shared/types';

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
