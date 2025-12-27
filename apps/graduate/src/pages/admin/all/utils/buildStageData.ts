import type {
  StageData,
  StudentStatus,
  PeriodData,
} from '../types/allManagement';

export function formatSubmissionStatus(
  createdAt: string | null,
  isSubmitted: boolean,
  isApproved: boolean,
): string {
  if (!isSubmitted) return '미제출';
  const approvalText = isApproved ? '승인' : '미승인';
  return `${createdAt} (${approvalText})`;
}

export function buildStageData(
  status: StudentStatus,
  period: PeriodData,
): StageData[] {
  if (status.type === 'CERTIFICATE') {
    return [
      {
        key: 'certificate',
        stage: '자격증',
        period: period.certificate ?? '-',
        createdAt: status.certificate.createdAt,
        isSubmitted: status.certificate.submitted,
        isApproved: status.certificate.approval,
      },
    ];
  } else {
    return [
      {
        key: 'midthesis',
        stage: '중간보고서',
        period: period.midThesis ?? '-',
        createdAt: status.midThesis.createdAt,
        isSubmitted: status.midThesis.submitted,
        isApproved: status.midThesis.approval,
      },
      {
        key: 'finalthesis',
        stage: '최종보고서',
        period: period.finalThesis ?? '-',
        createdAt: status.finalThesis.createdAt,
        isSubmitted: status.finalThesis.submitted,
        isApproved: status.finalThesis.approval,
      },
    ];
  }
}
