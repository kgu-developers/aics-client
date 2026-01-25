import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { updateGraduationBatchApproval } from '../api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

export function useGraduationBatchApproval({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateGraduationBatchApproval,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [...KEYS.GRADUATION_USERS],
      });
      await onSuccess?.();
    },
  });

  return {
    approveGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
