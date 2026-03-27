import { useCallback } from 'react';

import { GraduationType } from '~/shared/constants';
import { notifyError } from '~/shared/utils';

import { excelDownload } from '../utils/excelDownload';

export function useAdminDownload(graduationType?: GraduationType) {
  const handleDownload = useCallback(async () => {
    try {
      await excelDownload(graduationType);
    } catch (error) {
      notifyError(error, '다운로드에 실패했습니다.');
    }
  }, [graduationType]);

  return { handleDownload };
}
