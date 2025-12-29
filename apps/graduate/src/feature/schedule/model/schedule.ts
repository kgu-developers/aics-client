import type { GraduationStatus } from '~/shared/constants';

export type Schedule = {
  id: number;
  submissionType: GraduationStatus;
  startDate: string;
  endDate: string;
  status: string;
};
