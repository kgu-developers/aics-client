import type {
  CertificateStatus,
  StudentStatus,
  ThesisStatus,
} from '~/shared/types';

export type { CertificateStatus, StudentStatus, ThesisStatus };

export type AllManagementRow = {
  id: number;
  no: number;
  studentId: string;
  name: string;
  graduationDate: string;
  graduationTypeLabel: string;
  statusText: string;
};

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
}
