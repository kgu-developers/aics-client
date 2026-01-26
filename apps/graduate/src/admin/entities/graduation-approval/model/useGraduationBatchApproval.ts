import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys } from '~/shared/queries';

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
        queryKey: graduationUsersKeys.all,
      });
      await onSuccess?.();
    },
  });

  return {
    approveGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
