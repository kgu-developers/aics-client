import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeGraduationUser, removeGraduationUsersBatch } from '~/shared/api';
import { KEYS } from '~/shared/constants';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

export function useRemoveGraduationUsers({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (ids: number[]) => {
      if (ids.length === 1) {
        await removeGraduationUser(ids[0]);
        return { deletedIds: ids };
      }
      return removeGraduationUsersBatch(ids);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [...KEYS.GRADUATION_USERS],
      });
      await onSuccess?.();
    },
  });

  return {
    removeGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
