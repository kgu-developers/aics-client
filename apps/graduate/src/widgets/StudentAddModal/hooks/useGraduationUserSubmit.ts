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
    message.success('\ud559\uc0dd\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.');
    await onSuccess?.();
  };

  const handleAddStudents = async (
    rows: GraduationUserCreateRequest[],
  ) => {
    if (!rows.length) {
      message.warning('\ucd94\uac00\ud560 \ud559\uc0dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.');
      return;
    }

    await batchMutation.mutateAsync({ graduationUsers: rows });
    message.success(`${rows.length}\uba85\uc758 \ud559\uc0dd\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.`);
    await onSuccess?.();
  };

  return {
    handleAddStudent,
    handleAddStudents,
    singleMutation,
    batchMutation,
  };
};
