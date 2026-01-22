import { useCallback } from 'react';

import type { GraduationTypeFilter } from '~/shared/api/student/fetchGraduationUsers';
import { useToast } from '~/shared/hooks';
import { downloadGraduationUsersExcel } from '~/shared/utils';

export function useAdminDownload(graduationType?: GraduationTypeFilter) {
  const { toast } = useToast();

  const handleDownload = useCallback(async () => {
    try {
      await downloadGraduationUsersExcel(graduationType);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : '다운로드에 실패했습니다.',
      );
    }
  }, [graduationType, toast]);

  return { handleDownload };
}
