import type { ScheduleStatus, SubmissionType } from '~/shared/types';

export type ScheduleItem = {
  id: number;
  submissionType: SubmissionType;
  startDate: string;
  endDate: string;
  status: ScheduleStatus;
};
