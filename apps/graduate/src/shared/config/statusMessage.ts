/**
 * 로딩 메시지
 */
export const LOADING_MESSAGES = {
  DEFAULT: '로딩 중...',
  SCHEDULE: '일정을 불러오는 중...',
  NOTICE: '공지사항을 불러오는 중...',
  STATUS: '상태를 확인하는 중...',
  FILE: '파일을 불러오는 중...',
  SAVING: '저장하는 중...',
  DELETING: '삭제하는 중...',
} as const;

/**
 * 에러 메시지
 */
export const ERROR_MESSAGES = {
  DEFAULT: '오류가 발생했습니다',
  NETWORK: '네트워크 연결을 확인해주세요',
  SCHEDULE_FETCH: '일정을 불러올 수 없습니다',
  NOTICE_FETCH: '공지사항을 불러올 수 없습니다',
  STATUS_FETCH: '상태를 확인할 수 없습니다',
  FILE_UPLOAD: '파일 업로드에 실패했습니다',
  UNAUTHORIZED: '로그인이 필요합니다',
  FORBIDDEN: '권한이 없습니다',
} as const;

/**
 * 빈 상태 메시지
 */
export const EMPTY_MESSAGES = {
  SCHEDULE: '등록된 일정이 없습니다',
  NOTICE: '등록된 공지사항이 없습니다',
  SEARCH_RESULT: '검색 결과가 없습니다',
  NO_DATA: '데이터가 없습니다',
} as const;
