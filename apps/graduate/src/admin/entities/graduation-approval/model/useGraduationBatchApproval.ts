import { useMutation, useQueryClient } from '@tanstack/react-query';

import { graduationUsersKeys, studentKeys } from '~/shared/queries';

import {
  type UpdateGraduationApprovalParams,
  updateGraduationApproval,
} from '../api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

type UpdateGraduationBatchApprovalResult = {
  approvedIds: number[];
  successCount: number;
  failureCount: number;
};

export function useGraduationBatchApproval({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation<
    UpdateGraduationBatchApprovalResult,
    Error,
    UpdateGraduationApprovalParams[]
  >({
    mutationFn: async targets => {
      const settled = await Promise.allSettled(
        targets.map(target => updateGraduationApproval(target)),
      );
      const approvedIds = settled.flatMap((result, index) =>
        result.status === 'fulfilled' ? [targets[index].graduationUserId] : [],
      );

      return {
        approvedIds,
        successCount: approvedIds.length,
        failureCount: targets.length - approvedIds.length,
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
    approveGraduationUsers: mutation.mutateAsync,
    mutation,
  };
}
