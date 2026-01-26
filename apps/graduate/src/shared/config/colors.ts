/**
 * 일정 색상 팔레트
 * 캘린더, 타임라인 등에서 사용되는 파스텔 색상
 */
export const SCHEDULE_COLORS = {
  BLUE: '#E3F2FD',
  PURPLE: '#F3E5F5',
  GREEN: '#E8F5E9',
  ORANGE: '#FFF3E0',
  PINK: '#FCE4EC',
  TEAL: '#E0F2F1',
} as const;

/**
 * 색상 팔레트 배열
 * 순차적으로 색상을 할당할 때 사용
 */
export const SCHEDULE_COLOR_PALETTE = Object.values(SCHEDULE_COLORS);

/**
 * 일정 상태별 색상
 */
export const SCHEDULE_STATUS_COLORS = {
  PENDING: '#FFF3E0',
  IN_PROGRESS: '#E3F2FD',
  COMPLETED: '#E8F5E9',
  OVERDUE: '#FCE4EC',
} as const;
