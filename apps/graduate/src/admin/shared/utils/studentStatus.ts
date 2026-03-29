import type {
  StudentStatus,
  ThesisStatus,
} from '~/admin/shared/types/studentDetail';

const STATUS_UNKNOWN = '??';

const STATUS_CERTIFICATE_NOT_SUBMITTED = '???-???';
const STATUS_CERTIFICATE_SUBMITTED = '???-??';
const STATUS_CERTIFICATE_APPROVED = '???-??';

const STATUS_MID_REPORT_NOT_SUBMITTED = '?????-???';
const STATUS_MID_REPORT_SUBMITTED = '?????-??';

const STATUS_FINAL_REPORT_NOT_SUBMITTED = '?????-???';
const STATUS_FINAL_REPORT_SUBMITTED = '?????-??';
const STATUS_FINAL_REPORT_APPROVED = '?????-??';

type ThesisStageLabel = '?????' | '?????';
type SubmissionLabel = '??' | '???';
type ApprovalLabel = '??' | '???';

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
      stage: '?????',
      submissionStatus: status.midThesis.submitted ? '??' : '???',
      approvalStatus: status.midThesis.approval ? '??' : '???',
      submissionId: status.midThesis.id,
      isSubmitted: status.midThesis.submitted,
      isApproved: status.midThesis.approval,
    };
  }

  return {
    stage: '?????',
    submissionStatus: status.finalThesis.submitted ? '??' : '???',
    approvalStatus: status.finalThesis.approval ? '??' : '???',
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
      stage: '?????',
      submissionStatus: '??',
      approvalStatus: '??',
      submissionId: status.finalThesis.id,
      isSubmitted: true,
      isApproved: true,
    };
  }

  if (status.midThesis.approval) {
    return {
      stage: '?????',
      submissionStatus: '??',
      approvalStatus: '??',
      submissionId: status.midThesis.id,
      isSubmitted: true,
      isApproved: true,
    };
  }

  if (status.finalThesis.submitted) {
    return {
      stage: '?????',
      submissionStatus: '??',
      approvalStatus: '???',
      submissionId: status.finalThesis.id,
      isSubmitted: true,
      isApproved: false,
    };
  }

  if (status.midThesis.submitted) {
    return {
      stage: '?????',
      submissionStatus: '??',
      approvalStatus: '???',
      submissionId: status.midThesis.id,
      isSubmitted: true,
      isApproved: false,
    };
  }

  return {
    stage: '?????',
    submissionStatus: '???',
    approvalStatus: '???',
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
