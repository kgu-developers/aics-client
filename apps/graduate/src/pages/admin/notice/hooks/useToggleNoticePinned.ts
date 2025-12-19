import { useMutation, useQueryClient } from '@tanstack/react-query';

import { toggleNoticePinned } from '~/shared/api';
import { KEYS } from '~/shared/constants';
import type { TogglePinnedRequest } from '~/shared/types';

export function useToggleNoticePinned(noticeId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TogglePinnedRequest) =>
      toggleNoticePinned(noticeId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.NOTICE, 'list'] });
      queryClient.invalidateQueries({ queryKey: [KEYS.NOTICE, noticeId] });
    },
  });
}
