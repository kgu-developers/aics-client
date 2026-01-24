import { GraduationLabelType } from '~/shared/api';

import type { AllManagementRow } from '../types/allManagement';

export const STATUS_UNKNOWN = '미정';

export const STATUS_CERTIFICATE_NOT_SUBMITTED = '자격증-미제출';
export const STATUS_CERTIFICATE_SUBMITTED = '자격증-제출';
export const STATUS_CERTIFICATE_APPROVED = '자격증-승인';

export const STATUS_MID_REPORT_NOT_SUBMITTED = '중간보고서-미제출';
export const STATUS_MID_REPORT_SUBMITTED = '중간보고서-제출';
export const STATUS_MID_REPORT_APPROVED = '중간보고서-승인';

export const STATUS_FINAL_REPORT_NOT_SUBMITTED = '최종보고서-미제출';
export const STATUS_FINAL_REPORT_SUBMITTED = '최종보고서-제출';
export const STATUS_FINAL_REPORT_APPROVED = '최종보고서-승인';

export const HEADER_NO = '번호';
export const HEADER_STUDENT_ID = '학번';
export const HEADER_NAME = '이름';
export const HEADER_TYPE = '졸업 유형';
export const HEADER_STATUS = '상태';
export const HEADER_STAGE = '단계';
export const HEADER_PERIOD = '기간';

export const TYPE_THESIS = '논문';
export const TYPE_CERTIFICATE = '자격증';
export const TYPE_UNKNOWN = '미정';

export const TITLE_ALL_MANAGEMENT = '졸업 대상 전체 관리';
export const LOADING_TEXT = '불러오는 중...';

export const TYPE_LABEL: Record<
  GraduationLabelType,
  AllManagementRow['graduationTypeLabel']
> = {
  미정: TYPE_UNKNOWN,
  논문: TYPE_THESIS,
  자격증: TYPE_CERTIFICATE,
};
