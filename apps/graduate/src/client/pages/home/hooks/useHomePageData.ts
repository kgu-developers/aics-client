import { WORKFLOW_STAGE_INFO } from '~/shared/constants/graduationWorkflow';
import { WORKFLOW_STAGE } from '~/shared/types/graduation';

import { useFetchGraduationStatus } from '../api/fetchGraduationStatus';

export const useHomePageData = () => {
  const {
    data: graduationStatus,
    isLoading: graduationStatusLoading,
    error: graduationStatusError,
  } = useFetchGraduationStatus();

  const currentStatus =
    graduationStatus?.status ?? WORKFLOW_STAGE.TYPE_NOT_SELECTED;

  const statusTextData = WORKFLOW_STAGE_INFO[currentStatus];

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
