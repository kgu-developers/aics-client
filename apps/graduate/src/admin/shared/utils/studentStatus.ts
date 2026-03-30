import type {
  StudentStatus,
  ThesisStatus,
} from '~/admin/shared/types/studentDetail';

const STATUS_UNKNOWN = '미정';

const STATUS_CERTIFICATE_NOT_SUBMITTED = '자격증-미제출';
const STATUS_CERTIFICATE_SUBMITTED = '자격증-제출';
const STATUS_CERTIFICATE_APPROVED = '자격증-승인';

const STATUS_MID_REPORT_NOT_SUBMITTED = '중간보고서-미제출';
const STATUS_MID_REPORT_SUBMITTED = '중간보고서-제출';

const STATUS_FINAL_REPORT_NOT_SUBMITTED = '최종보고서-미제출';
const STATUS_FINAL_REPORT_SUBMITTED = '최종보고서-제출';
const STATUS_FINAL_REPORT_APPROVED = '최종보고서-승인';

type ThesisStageLabel = '중간보고서' | '최종보고서';
type SubmissionLabel = '제출' | '미제출';
type ApprovalLabel = '승인' | '미승인';

export type ThesisStageState = {
  stage: ThesisStageLabel;
  submissionStatus: SubmissionLabel;
  approvalStatus: ApprovalLabel;
  submissionId: number | null;
  isSubmitted: boolean;
  isApproved: boolean;
};

export function getCurrentThesisStageState(
  status: ThesisStatus,
): ThesisStageState {
  if (!status.midThesis.approval) {
    return {
      stage: '중간보고서',
      submissionStatus: status.midThesis.submitted ? '제출' : '미제출',
      approvalStatus: status.midThesis.approval ? '승인' : '미승인',
      submissionId: status.midThesis.id,
      isSubmitted: status.midThesis.submitted,
      isApproved: status.midThesis.approval,
    };
  }

  return {
    stage: '최종보고서',
    submissionStatus: status.finalThesis.submitted ? '제출' : '미제출',
    approvalStatus: status.finalThesis.approval ? '승인' : '미승인',
    submissionId: status.finalThesis.id,
    isSubmitted: status.finalThesis.submitted,
    isApproved: status.finalThesis.approval,
  };
}

export function getThesisDisapprovalStageState(
  status: ThesisStatus,
): ThesisStageState {
  if (status.finalThesis.approval) {
    return {
      stage: '최종보고서',
      submissionStatus: '제출',
      approvalStatus: '승인',
      submissionId: status.finalThesis.id,
      isSubmitted: true,
      isApproved: true,
    };
  }

  if (status.midThesis.approval) {
    return {
      stage: '중간보고서',
      submissionStatus: '제출',
      approvalStatus: '승인',
      submissionId: status.midThesis.id,
      isSubmitted: true,
      isApproved: true,
    };
  }

  if (status.finalThesis.submitted) {
    return {
      stage: '최종보고서',
      submissionStatus: '제출',
      approvalStatus: '미승인',
      submissionId: status.finalThesis.id,
      isSubmitted: true,
      isApproved: false,
    };
  }

  if (status.midThesis.submitted) {
    return {
      stage: '중간보고서',
      submissionStatus: '제출',
      approvalStatus: '미승인',
      submissionId: status.midThesis.id,
      isSubmitted: true,
      isApproved: false,
    };
  }

  return {
    stage: '중간보고서',
    submissionStatus: '미제출',
    approvalStatus: '미승인',
    submissionId: status.midThesis.id,
    isSubmitted: false,
    isApproved: false,
  };
}

export function getStatusLabel(status: StudentStatus | undefined): string {
  switch (status?.type) {
    case 'CERTIFICATE':
      if (!status.submitted) {
        return STATUS_CERTIFICATE_NOT_SUBMITTED;
      }
      if (!status.approval) {
        return STATUS_CERTIFICATE_SUBMITTED;
      }
      return STATUS_CERTIFICATE_APPROVED;

    case 'THESIS':
      if (!status.midThesis.submitted) {
        return STATUS_MID_REPORT_NOT_SUBMITTED;
      }
      if (!status.midThesis.approval) {
        return STATUS_MID_REPORT_SUBMITTED;
      }
      if (!status.finalThesis.submitted) {
        return STATUS_FINAL_REPORT_NOT_SUBMITTED;
      }
      if (!status.finalThesis.approval) {
        return STATUS_FINAL_REPORT_SUBMITTED;
      }
      return STATUS_FINAL_REPORT_APPROVED;

    default:
      return STATUS_UNKNOWN;
  }
}
