import { GRADUATION_STATUS, STATUS_TEXT } from '~/shared/constants';

import { useFetchGraduationStatus } from '../api/fetchGraduationStatus';

export const useHomePageData = () => {
  const {
    data: graduationStatus,
    isLoading: graduationStatusLoading,
    error: graduationStatusError,
  } = useFetchGraduationStatus();

  const currentStatus =
    graduationStatus?.status ?? GRADUATION_STATUS.GRADUATION_TYPE_NOT_SUBMITTED;

  const statusTextData = STATUS_TEXT[currentStatus];

  return {
    graduationStatusData: graduationStatus,
    graduationStatusLoading,
    graduationStatusError,
    currentStatus,
    title: statusTextData?.title,
    description: statusTextData?.description,
    button: statusTextData?.button,
  };
};
