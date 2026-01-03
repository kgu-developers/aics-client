import type { StudentStatus } from '~/shared/types';

export interface StudentDetailApiResponse {
  graduationUserId: number;
  name: string;
  studentId: string;
  graduationDate: string;
  advisor: string;
  major: string;
  capstoneCompletion: boolean;
  status: StudentStatus;
}
