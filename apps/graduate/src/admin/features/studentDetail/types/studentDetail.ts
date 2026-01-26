import type { SubmissionStatus } from '~/shared/types/graduation';

export interface StudentDetailApiResponse {
  graduationUserId: number;
  name: string;
  studentId: string;
  graduationDate: string;
  advisor: string;
  major: string;
  capstoneCompletion: boolean;
  status: SubmissionStatus;
}
