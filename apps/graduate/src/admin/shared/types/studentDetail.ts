import type {
  CertificateSubmission,
  SubmissionStatus,
  ThesisSubmission,
} from '~/shared/types/graduation';

export type {
  CertificateSubmission as CertificateStatus,
  ThesisSubmission as ThesisStatus,
};

export type StudentStatus = SubmissionStatus;

export type PeriodData = {
  certificate?: string;
  midThesis?: string;
  finalThesis?: string;
};

export interface StageData {
  key: string;
  stage: string;
  period: string;
  createdAt: string | null;
  isSubmitted: boolean;
  isApproved: boolean;
  fileId: number | null;
}
