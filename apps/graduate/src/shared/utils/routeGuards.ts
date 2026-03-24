import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { END_POINT, SCHEDULE } from '~/shared/constants';
import type { SubmissionType } from '~/shared/types';
import { WORKFLOW_STAGE, type WorkflowStage } from '~/shared/types/graduation';

import { get } from '../api';

dayjs.extend(isBetween);

/**
 * 졸업 상태 조회. 미등록·네트워크 오류 등으로 조회에 실패하면 null.
 */
export async function fetchUserStatus(): Promise<WorkflowStage | null> {
  try {
    const response = await get<{ status: WorkflowStage }>({
      request: END_POINT.USER.GRADUATION_STATUS,
    });
    return response.data.status;
  } catch {
    return null;
  }
}

async function fetchScheduleBySubmissionType(
  submissionType: SubmissionType,
): Promise<{ startDate: string; endDate: string } | null> {
  try {
    const response = await get<{
      contents: Array<{
        submissionType: SubmissionType;
        startDate: string;
        endDate: string;
      }>;
    }>({
      request: END_POINT.USER.SCHEDULES_ALL,
    });

    const schedule = response.data.contents.find(
      s => s.submissionType === submissionType,
    );

    return schedule
      ? { startDate: schedule.startDate, endDate: schedule.endDate }
      : null;
  } catch {
    return null;
  }
}

/**
 * 현재 시각이 일정 구간 안에 있는지 (양끝 포함)
 */
export function isWithinSchedule(startDate: string, endDate: string): boolean {
  const now = dayjs();
  return now.isBetween(dayjs(startDate), dayjs(endDate), null, '[]');
}

function formatScheduleRange(startDate: string, endDate: string): string {
  return `${startDate} ~ ${endDate}`;
}

/**
 * 페이지 접근 권한 체크 및 리다이렉트 정보 반환
 */
export async function checkPageAccess(
  page: 'apply' | 'certification' | 'thesis',
): Promise<{ canAccess: boolean; reason?: string }> {
  try {
    const status = await fetchUserStatus();

    if (status === null) {
      return {
        canAccess: false,
        reason:
          '졸업 대상자로 등록되지 않았거나 졸업 정보를 불러올 수 없습니다. 담당자에게 문의해 주세요.',
      };
    }

    switch (page) {
      case 'apply': {
        const eligibleForApply =
          status === WORKFLOW_STAGE.TYPE_NOT_SELECTED ||
          status === WORKFLOW_STAGE.PROFESSOR_NOT_ASSIGNED;

        if (!eligibleForApply) {
          return {
            canAccess: false,
            reason: '졸업 방식 선택 단계가 아닙니다.',
          };
        }

        const schedule = await fetchScheduleBySubmissionType(
          SCHEDULE.SUBMITTED,
        );

        if (!schedule) {
          return {
            canAccess: false,
            reason: '졸업 요건 취득 방식 신청 일정을 불러올 수 없습니다.',
          };
        }

        if (!isWithinSchedule(schedule.startDate, schedule.endDate)) {
          return {
            canAccess: false,
            reason: `졸업 요건 취득 방식 신청 기간이 아닙니다. (${formatScheduleRange(schedule.startDate, schedule.endDate)})`,
          };
        }

        return { canAccess: true };
      }

      case 'certification': {
        if (status !== WORKFLOW_STAGE.CERTIFICATE_PENDING) {
          return {
            canAccess: false,
            reason: '자격증 제출 단계가 아닙니다.',
          };
        }

        const schedule = await fetchScheduleBySubmissionType(
          SCHEDULE.CERTIFICATE,
        );

        if (!schedule) {
          return {
            canAccess: false,
            reason: '자격증 제출 일정을 불러올 수 없습니다.',
          };
        }

        if (!isWithinSchedule(schedule.startDate, schedule.endDate)) {
          return {
            canAccess: false,
            reason: `자격증 제출 기간이 아닙니다. (${formatScheduleRange(schedule.startDate, schedule.endDate)})`,
          };
        }

        return { canAccess: true };
      }

      case 'thesis': {
        let submissionType: SubmissionType | null = null;

        if (status === WORKFLOW_STAGE.MID_THESIS_PENDING) {
          submissionType = SCHEDULE.MIDTHESIS;
        } else if (status === WORKFLOW_STAGE.FINAL_THESIS_PENDING) {
          submissionType = SCHEDULE.FINALTHESIS;
        }

        if (!submissionType) {
          return {
            canAccess: false,
            reason: '논문 제출 단계가 아닙니다.',
          };
        }

        const schedule = await fetchScheduleBySubmissionType(submissionType);

        if (!schedule) {
          return {
            canAccess: false,
            reason: '논문 제출 일정을 불러올 수 없습니다.',
          };
        }

        if (!isWithinSchedule(schedule.startDate, schedule.endDate)) {
          return {
            canAccess: false,
            reason: `논문 제출 기간이 아닙니다. (${formatScheduleRange(schedule.startDate, schedule.endDate)})`,
          };
        }

        return { canAccess: true };
      }
    }
  } catch {
    return {
      canAccess: false,
      reason: '접근 권한을 확인할 수 없습니다.',
    };
  }
}
