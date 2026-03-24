import { WORKFLOW_STAGE_INFO } from '~/shared/constants/graduationWorkflow';

import { useFetchGraduationStatus } from '../api/fetchGraduationStatus';

export const useHomePageData = () => {
  const {
    data: graduationStatus,
    isLoading: graduationStatusLoading,
    isError: graduationStatusIsError,
    error: graduationStatusError,
  } = useFetchGraduationStatus();

  if (graduationStatusLoading) {
    return {
      graduationStatusData: graduationStatus,
      graduationStatusLoading: true,
      graduationStatusError: undefined,
      currentStatus: undefined,
      title: undefined,
      description: undefined,
      button: undefined,
    };
  }

  if (graduationStatusIsError || !graduationStatus) {
    return {
      graduationStatusData: undefined,
      graduationStatusLoading: false,
      graduationStatusError,
      currentStatus: undefined,
      title: '졸업 정보를 확인할 수 없어요.',
      description:
        '졸업 대상자로 등록되지 않았거나 정보를 불러올 수 없어요.\n담당자에게 문의해 주세요.',
      button: undefined,
    };
  }

  const currentStatus = graduationStatus.status;
  const statusTextData = WORKFLOW_STAGE_INFO[currentStatus];

  return {
    graduationStatusData: graduationStatus,
    graduationStatusLoading: false,
    graduationStatusError: undefined,
    currentStatus,
    title: statusTextData?.title,
    description: statusTextData?.description,
    button: statusTextData?.button,
  };
};
