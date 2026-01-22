export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  ROLE: 'role',
} as const;

export const KEYS = {
  GRADUATION_USERS: ['graduationUsers'],
  SCHEDULE: ['schedule'],
  SCHEDULE_ALL: ['schedule', 'all'],
  SCHEDULE_LIST: ['schedule', 'list'],
  SCHEDULE_CONTENT: ['schedule', 'content'],
  SCHEDULE_STATUS_TEXT: ['schedule', 'status', 'text'],
  NOTICE: ['notice'],
  NOTICE_LIST: ['notice', 'list'],
  STUDENT_DETAIL: ['studentDetail'],
  STUDENT_FILE: ['studentFile'],
  GRADUATION_STATUS: ['graduation', 'status'],
  APPROVAL: ['approval'],
} as const;
