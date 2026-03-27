import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys, studentKeys } from '~/shared/queries';

import { updateGraduationBatchDisapproval } from '../api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

type UpdateGraduationBatchDisapprovalResult = Awaited<
  ReturnType<typeof updateGraduationBatchDisapproval>
>;

export function useGraduationBatchDisapproval({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    UpdateGraduationBatchDisapprovalResult,
    Error,
    number[]
  >({
    mutationFn: updateGraduationBatchDisapproval,
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
    disapproveGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}

