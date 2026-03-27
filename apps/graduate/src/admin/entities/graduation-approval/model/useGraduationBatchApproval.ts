import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys, studentKeys } from '~/shared/queries';

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
      await queryClient.invalidateQueries({
        queryKey: studentKeys.details(),
      });
      await onSuccess?.();
    },
  });

  return {
    approveGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
