import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { graduationUsersKeys } from '~/shared/queries';
import type { GraduationUserCreateRequest } from '~/shared/types';

import {
  submitGraduationUser,
  submitGraduationUsersBatch,
} from '~/admin/widgets/StudentAddModal/api';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

export function useSubmitGraduationUser({ onSuccess }: Options = {}) {
  const queryClient = useQueryClient();

  const singleMutation = useMutation({
    mutationFn: submitGraduationUser,
    meta: { suppressErrorToast: true },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: graduationUsersKeys.all }),
  });

  const batchMutation = useMutation({
    mutationFn: submitGraduationUsersBatch,
    meta: { suppressErrorToast: true },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: graduationUsersKeys.all }),
  });

  const submitSingle = async (values: GraduationUserCreateRequest) => {
    await singleMutation.mutateAsync(values);
    message.success('한 명의 학생이 추가되었습니다.');
    await onSuccess?.();
  };

  const submitBatch = async (rows: GraduationUserCreateRequest[]) => {
    if (!rows.length) {
      message.warning('추가할 학생이 없습니다.');
      return;
    }

    await batchMutation.mutateAsync({ graduationUsers: rows });
    message.success(`총 ${rows.length}명의 학생이 추가되었습니다.`);
    await onSuccess?.();
  };

  return {
    submitSingle,
    submitBatch,
    singleMutation,
    batchMutation,
  };
}
