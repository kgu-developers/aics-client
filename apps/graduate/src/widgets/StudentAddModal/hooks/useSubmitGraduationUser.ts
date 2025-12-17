import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';

import { submitGraduationUser } from '../api/submitGraduationUser';
import { submitGraduationUsersBatch } from '../api/submitGraduationUsersBatch';
import type { GraduationUserCreateRequest } from '../types/studentAddModal';

type Options = {
  onSuccess?: () => void | Promise<void>;
};

export const useGraduationUserSubmit = ({ onSuccess }: Options = {}) => {
  const singleMutation = useMutation({ mutationFn: submitGraduationUser });
  const batchMutation = useMutation({ mutationFn: submitGraduationUsersBatch });

  const handleAddStudent = async (values: GraduationUserCreateRequest) => {
    await singleMutation.mutateAsync(values);
    message.success(' 한 명의 학생이 추가되었습니다.');
    await onSuccess?.();
  };

  const handleAddStudents = async (
    rows: GraduationUserCreateRequest[],
  ) => {
    if (!rows.length) {
      message.warning('추가할 학생이 없습니다.');
      return;
    }

    await batchMutation.mutateAsync({ graduationUsers: rows });
    message.success('총 ' +`${rows.length}` + ' 명의 학생이 추가되었습니다.');
    await onSuccess?.();
  };

  return {
    handleAddStudent,
    handleAddStudents,
    singleMutation,
    batchMutation,
  };
};
