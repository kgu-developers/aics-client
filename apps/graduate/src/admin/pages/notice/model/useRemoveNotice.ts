import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { removeNotice } from '../api';

export function useRemoveNotice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) => removeNotice(noticeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...KEYS.NOTICE, 'list'] });
    },
  });
}
