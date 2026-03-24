import { getSubmissionTypeLabel, SCHEDULE } from '~/shared/constants';
import type { SubmissionTypeLabel } from '~/shared/types';

import type { ScheduleItem } from '~/admin/pages/schedule/model';
import type { PeriodData } from '~/admin/shared/types/studentDetail';

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
