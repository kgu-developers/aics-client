import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { END_POINT } from '~/shared/constants';
import { WORKFLOW_STAGE, type WorkflowStage } from '~/shared/types/graduation';

import { get } from '../api';

dayjs.extend(isBetween);

/**
 * 졸업 상태 조회
 */
export async function fetchUserStatus(): Promise<WorkflowStage> {
  try {
    const response = await get<{ status: WorkflowStage }>({
      request: END_POINT.USER.GRADUATION_STATUS,
    });
    return response.data.status;
  } catch {
    alert('졸업 상태를 불러올 수 없습니다.');
    throw new Error('졸업 상태를 불러올 수 없습니다.');
  }
}

/**
 * 특정 단계의 일정 조회
 */
export async function fetchScheduleForStage(
  stage: WorkflowStage,
): Promise<{ startDate: string; endDate: string } | null> {
  try {
    const response = await get<{
      contents: Array<{
        submissionType: WorkflowStage;
        startDate: string;
        endDate: string;
      }>;
    }>({
      request: END_POINT.USER.SCHEDULES_ALL,
    });

    const schedule = response.data.contents.find(
      s => s.submissionType === stage,
    );

    return schedule
      ? { startDate: schedule.startDate, endDate: schedule.endDate }
      : null;
  } catch {
    return null;
  }
}

/**
 * 현재 시간이 일정 기간 내에 있는지 확인
 */
export function isWithinSchedule(startDate: string, endDate: string): boolean {
  const now = dayjs();

  if (!now.isBetween(dayjs(startDate), dayjs(endDate), null, '[]')) {
    alert(`${startDate} ~ ${endDate} 일정 기간이 아닙니다.`);
    return false;
  }

  return true;
}

/**
 * Apply 페이지 접근 가능 여부 확인
 * - 졸업 방식 미선택 상태일 때만 접근 가능
 */
export async function canAccessApplyPage(): Promise<boolean> {
  const status = await fetchUserStatus();
  return status === WORKFLOW_STAGE.TYPE_NOT_SELECTED || status === null;
}

/**
 * Certification 페이지 접근 가능 여부 확인
 * - 자격증 제출 대기 상태일 때만 접근 가능
 * - 자격증 제출 일정 기간 내에만 접근 가능
 */
export async function canAccessCertificationPage(): Promise<boolean> {
  const status = await fetchUserStatus();

  if (status !== WORKFLOW_STAGE.CERTIFICATE_PENDING) {
    alert('자격증 제출 단계가 아닙니다.');
    return false;
  }

  return true;

  // const schedule = await fetchScheduleForStage(
  //   WORKFLOW_STAGE.CERTIFICATE_PENDING,
  // );

  // if (!schedule) {
  //   alert('사용자 일정을 불러올 수 없습니다.');
  //   return false;
  // }

  // return isWithinSchedule(schedule.startDate, schedule.endDate);
}

/**
 * Thesis 페이지 접근 가능 여부 확인
 * - 중간/최종 논문 제출 대기 상태일 때만 접근 가능
 * - 해당 논문 제출 일정 기간 내에만 접근 가능
 */
export async function canAccessThesisPage(): Promise<boolean> {
  const status = await fetchUserStatus();

  if (status === WORKFLOW_STAGE.MID_THESIS_PENDING) {
    // const schedule = await fetchScheduleForStage(
    //   WORKFLOW_STAGE.MID_THESIS_PENDING,
    // );
    // if (!schedule) {
    //   alert('사용자 일정을 불러올 수 없습니다.');
    //   return false;
    // }
    // return isWithinSchedule(schedule.startDate, schedule.endDate);
    return true;
  }

  if (status === WORKFLOW_STAGE.FINAL_THESIS_PENDING) {
    // const schedule = await fetchScheduleForStage(
    //   WORKFLOW_STAGE.FINAL_THESIS_PENDING,
    // );
    // if (!schedule) {
    //   alert('사용자 일정을 불러올 수 없습니다.');
    //   return false;
    // }
    // return isWithinSchedule(schedule.startDate, schedule.endDate);
    return true;
  }

  return false;
}

/**
 * 페이지 접근 권한 체크 및 리다이렉트 정보 반환
 */
export async function checkPageAccess(
  page: 'apply' | 'certification' | 'thesis',
): Promise<{ canAccess: boolean; reason?: string }> {
  try {
    let canAccess = false;
    let reason = '';

    switch (page) {
      case 'apply':
        canAccess = await canAccessApplyPage();
        if (!canAccess) {
          reason = '졸업 방식 선택 단계가 아닙니다.';
        }
        break;

      case 'certification':
        canAccess = await canAccessCertificationPage();
        if (!canAccess) {
          const status = await fetchUserStatus();
          if (status !== WORKFLOW_STAGE.CERTIFICATE_PENDING) {
            reason = '자격증 제출 단계가 아닙니다.';
          } else {
            reason = '자격증 제출 기간이 아닙니다.';
          }
        }
        break;

      case 'thesis':
        canAccess = await canAccessThesisPage();
        if (!canAccess) {
          const status = await fetchUserStatus();
          if (
            status !== WORKFLOW_STAGE.MID_THESIS_PENDING &&
            status !== WORKFLOW_STAGE.FINAL_THESIS_PENDING
          ) {
            reason = '논문 제출 단계가 아닙니다.';
          } else {
            reason = '논문 제출 기간이 아닙니다.';
          }
        }
        break;
    }

    if (!canAccess) {
      alert(reason);
    }

    return { canAccess, reason };
  } catch {
    alert('접근 권한을 확인할 수 없습니다.');
    return {
      canAccess: false,
      reason: '접근 권한을 확인할 수 없습니다.',
    };
  }
}
