import type { PeriodData } from '../types/allManagement';

import type { ScheduleItem } from '~/pages/admin/schedule/model';

const SUBMISSION_TYPE = {
  CERTIFICATE: 'CERTIFICATE',
  MID_THESIS: 'MIDTHESIS',
  FINAL_THESIS: 'FINALTHESIS',
} as const;

export function extractPeriodData(
  schedules: ScheduleItem[] | undefined,
): PeriodData {
  if (!schedules) return {};

  const findPeriod = (type: string) => {
    const schedule = schedules.find(s => s.submissionType === type);
    return schedule ? `${schedule.startDate}~${schedule.endDate}` : undefined;
  };

  return {
    certificate: findPeriod(SUBMISSION_TYPE.CERTIFICATE),
    midThesis: findPeriod(SUBMISSION_TYPE.MID_THESIS),
    finalThesis: findPeriod(SUBMISSION_TYPE.FINAL_THESIS),
  };
}
