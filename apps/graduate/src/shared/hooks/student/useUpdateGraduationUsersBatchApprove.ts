import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateGraduationUsersBatchApprove } from '~/shared/api';
import { KEYS } from '~/shared/constants';

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
