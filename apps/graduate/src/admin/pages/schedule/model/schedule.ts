import type { ScheduleStatus, SubmissionTypeLabel } from '~/shared/types';

export type ScheduleItem = {
  id: number;
  submissionType: SubmissionTypeLabel;
  startDate: string;
  endDate: string;
  status: ScheduleStatus;
};
