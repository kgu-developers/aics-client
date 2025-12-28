import type {
  ScheduleStatus,
  SubmissionType,
  SubmissionTypeLabel,
} from '~/shared/types';

export const SUBMISSION_TYPE_OPTIONS = [
  { value: 'SUBMITTED', label: '신청접수' },
  { value: 'MIDTHESIS', label: '중간보고서' },
  { value: 'FINALTHESIS', label: '최종보고서' },
  { value: 'CERTIFICATE', label: '자격증' },
  { value: 'APPROVED', label: '최종 통과' },
  { value: 'OTHER', label: '기타자격' },
] as const;

export function getSubmissionTypeByIndex(
  index: number,
): SubmissionType | undefined {
  return SUBMISSION_TYPE_OPTIONS[index - 1]?.value;
}

export function getSubmissionTypeIndex(type: SubmissionType): number {
  const index = SUBMISSION_TYPE_OPTIONS.findIndex(
    option => option.value === type,
  );
  return index !== -1 ? index + 1 : 0;
}

export function getSubmissionTypeLabel(
  type: SubmissionType,
): SubmissionTypeLabel {
  const option = SUBMISSION_TYPE_OPTIONS.find(option => option.value === type);
  return option?.label ?? '기타자격';
}

export function getScheduleStatusLabel(status: ScheduleStatus): string {
  const labels: Record<ScheduleStatus, string> = {
    IN_PROGRESS: '진행중',
    PENDING: '대기',
    CLOSED: '마감',
  };
  return labels[status];
}
