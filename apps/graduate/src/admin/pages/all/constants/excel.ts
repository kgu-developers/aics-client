export const TABLE_HEADER = {
  ID: '학번',
  NAME: '이름',
  PROFESSOR: '지도교수',
  PERIOD: '졸업년도',
  DEPARTMENT: '소속학과',
  DELAY: '지연횟수',
  CAPSTONE: '캡스톤이수',
  APP_STATUS: '신청서 상태',
  MID_STATUS: '중간보고서 상태',
  FINAL_STATUS: '최종보고서 상태',
} as const;

export type TableHeader = (typeof TABLE_HEADER)[keyof typeof TABLE_HEADER];
export type SubmissionStage = '신청서' | '중간보고서' | '최종보고서';
