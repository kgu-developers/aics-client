import { GRADUATION_STATUS } from '~/shared/constants';
import { SubmissionType } from '~/shared/types';

import type { PeriodData } from '../types/allManagement';

import type { ScheduleItem } from '~/pages/admin/schedule/model';

export function extractPeriodData(
  schedules: ScheduleItem[] | undefined,
): PeriodData {
  if (!schedules) return {};

  const findPeriod = (type: SubmissionType) => {
    const schedule = schedules.find(s => s.submissionType === type);
    return schedule ? `${schedule.startDate}~${schedule.endDate}` : undefined;
  };

  return {
    certificate: findPeriod(GRADUATION_STATUS.CERTIFICATE),
    midThesis: findPeriod(GRADUATION_STATUS.MIDTHESIS),
    finalThesis: findPeriod(GRADUATION_STATUS.FINALTHESIS),
  };
}
