export const API_URL =
  import.meta.env.VITE_API_URL || 'https://aics-api.kgudevelopers.monster';

export const API_AUTH_URL =
  import.meta.env.VITE_AUTH_API_URL ||
  'https://aics-auth.kgudevelopers.monster';

export const API_ADMIN_URL =
  import.meta.env.VITE_ADMIN_API_URL ||
  'https://aics-admin.kgudevelopers.monster';

export type EndpointValue<T> = T extends string
  ? T
  : T extends (...args: any[]) => infer R
    ? R extends string
      ? R
      : never
    : T extends Record<string, unknown>
      ? {
          [K in keyof T]: EndpointValue<T[K]>;
        }[keyof T]
      : never;

export type EndpointPath = EndpointValue<typeof END_POINT>;

/**
 * AUTH, ADMIN, USER 세 가지 타입의 엔드포인트를 정의합니다.
 * 이떄 타입의 구분은 인스턴스(baseURL)에 따라 결정됩니다.
 * 타입 아래 더한 Depth를 가지는 것은 불가능합니다. (ex. AUTH.LOGIN.DETAIL.USER_ID)
 * 현재 Depth 지켜서 엔드포인트 추가해주세요.
 */
import type { WorkflowStage } from '~/shared/types/graduation';

import { SubmissionType } from '../types';

export const END_POINT = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REFRESH: '/api/v1/auth/reissue',
  },
  ADMIN: {
    GRADUATION_USERS: '/api/v1/admin/graduation-users',
    GRADUATION_USERS_EXCEL: '/api/v1/admin/graduation-users/excel',
    GRADUATION_USER: (graduationUserId: number) =>
      `/api/v1/admin/graduation-users/${graduationUserId}`,
    GRADUATION_USERS_BATCH: '/api/v1/admin/graduation-users/batch',
    GRADUATION_USERS_BATCH_APPROVE:
      '/api/v1/admin/graduation-users/batch/approve',
    GRADUATION_USERS_BATCH_DISAPPROVE:
      '/api/v1/admin/graduation-users/batch/disapprove',
    USERS: '/api/v1/admin/users',
    SCHEDULE_CREATE: '/api/v1/admin/schedules',
    SCHEDULE_DELETE: (scheduleId: number) =>
      `/api/v1/admin/schedules/${scheduleId}`,
    SCHEDULE_UPDATE: (scheduleId: number) =>
      `/api/v1/admin/schedules/${scheduleId}`,
    SCHEDULE_CONTENT_UPDATE: (submissionType: SubmissionType) =>
      `/api/v1/admin/schedules/type/${submissionType}/content`,
    NOTICE_CREATE: '/api/v1/admin/posts',
    NOTICE_UPDATE: (noticeId: number) => `/api/v1/admin/posts/${noticeId}`,
    NOTICE_DELETE: (noticeId: number) =>
      `/api/v1/admin/posts/${noticeId}/delete`,
    NOTICE_FILE_UPLOAD: '/api/v1/admin/files/post',
    CERTIFICATE_FILE: (certificateId: number) =>
      `/api/v1/admin/certificate/${certificateId}`,
    THESIS_FILE: (thesisId: number) => `/api/v1/admin/thesis/${thesisId}`,
  },
  USER: {
    SIGNUP: '/api/v1/users/signup',
    GRADUATION_STATUS: '/api/v1/graduation-users/my',
    GRADUATION_TYPE: '/api/v1/graduation-users/graduation-type',
    CONFIRM_EMAIL: '/api/v1/graduation-users/email',
    SCHEDULES_ALL: '/api/v1/schedules',
    STATUS_TEXT: (submissionType: WorkflowStage) =>
      `/api/v1/schedules/type/${submissionType}` as const,
    THESIS: '/api/v1/thesis',
    CERTIFICATE: '/api/v1/certificate',
    REFRESH: '/api/v1/auth/refresh',
    SCHEDULE_LIST: '/api/v1/schedules',
    SCHEDULE: (scheduleId: number) => `/api/v1/schedules/${scheduleId}`,
    SCHEDULE_CONTENT: (submissionType: SubmissionType) =>
      `/api/v1/schedules/type/${submissionType}`,
    NOTICE_LIST: '/api/v1/posts',
    NOTICE: (noticeId: number) => `/api/v1/posts/${noticeId}`,
    STUDENT_DETAIL: (studentId: number) =>
      `/api/v1/admin/graduation-users/${studentId}`,
  },
} as const;
