import { SCHEDULE } from '~/shared/constants';
import { SubmissionTypeLabel } from '~/shared/types';

import { getSubmissionTypeLabel } from '../../schedule/constants';
import type { PeriodData } from '../types/allManagement';

import type { ScheduleItem } from '~/admin/pages/schedule/model';

export function extractPeriodData(
  schedules: ScheduleItem[] | undefined,
): PeriodData {
  if (!schedules) return {};

  const findPeriod = (type: SubmissionTypeLabel) => {
    const schedule = schedules.find(s => s.submissionType === type);
    return schedule ? `${schedule.startDate}~${schedule.endDate}` : undefined;
  };

  return {
    certificate: findPeriod(getSubmissionTypeLabel(SCHEDULE.CERTIFICATE)),
    midThesis: findPeriod(getSubmissionTypeLabel(SCHEDULE.MIDTHESIS)),
    finalThesis: findPeriod(getSubmissionTypeLabel(SCHEDULE.FINALTHESIS)),
  };
}
