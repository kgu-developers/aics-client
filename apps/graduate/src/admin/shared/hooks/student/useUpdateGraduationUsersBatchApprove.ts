import { useMutation, useQueryClient } from '@tanstack/react-query';

import { KEYS } from '~/shared/constants';

import { updateGraduationUsersBatchApprove } from '~/admin/shared/api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

export function useUpdateGraduationUsersBatchApprove({
  onSuccess,
}: Options = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateGraduationUsersBatchApprove,
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
