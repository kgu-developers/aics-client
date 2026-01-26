import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys } from '~/shared/queries';

import {
  removeGraduationUser,
  removeGraduationUsersBatch,
} from '~/admin/entities/graduation-users/api';

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
        queryKey: graduationUsersKeys.all,
      });
      await onSuccess?.();
    },
  });

  return {
    removeGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
