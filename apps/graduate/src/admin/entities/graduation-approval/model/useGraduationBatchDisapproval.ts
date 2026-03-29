import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys, studentKeys } from '~/shared/queries';

import {
  type UpdateGraduationDisapprovalParams,
  updateGraduationDisapproval,
} from '../api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

type UpdateGraduationBatchDisapprovalResult = {
  disapprovedIds: number[];
  successCount: number;
  failureCount: number;
};

export function useGraduationBatchDisapproval({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    UpdateGraduationBatchDisapprovalResult,
    Error,
    UpdateGraduationDisapprovalParams[]
  >({
    mutationFn: async targets => {
      const settled = await Promise.allSettled(
        targets.map(target => updateGraduationDisapproval(target)),
      );
      const disapprovedIds = settled.flatMap((result, index) =>
        result.status === 'fulfilled'
          ? [targets[index].graduationUserId]
          : [],
      );

      return {
        disapprovedIds,
        successCount: disapprovedIds.length,
        failureCount: targets.length - disapprovedIds.length,
      };
    },
    onSuccess: async result => {
      if (result.successCount === 0) {
        return;
      }
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
