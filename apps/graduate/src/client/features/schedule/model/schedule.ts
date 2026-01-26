import type { WorkflowStage } from '~/shared/types/graduation';

export type Schedule = {
  id: number;
  submissionType: WorkflowStage;
  startDate: string;
  endDate: string;
  status: string;
};
