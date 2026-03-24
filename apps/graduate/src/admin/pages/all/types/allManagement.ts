import type {
  CertificateSubmission,
  SubmissionStatus,
  ThesisSubmission,
} from '~/shared/types/graduation';

import type { PeriodData, StageData } from '~/admin/shared/types/studentDetail';

export type {
  CertificateSubmission as CertificateStatus,
  SubmissionStatus as StudentStatus,
  ThesisSubmission as ThesisStatus,
};
export type { PeriodData, StageData };

export type AllManagementRow = {
  id: number;
  no: number;
  studentId: string;
  name: string;
  graduationDate: string;
  graduationTypeLabel: string;
  statusText: string;
};
