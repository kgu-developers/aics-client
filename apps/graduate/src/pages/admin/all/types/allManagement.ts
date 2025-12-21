export type AllManagementRow = {
  id: number;
  no: number;
  studentId: string;
  name: string;
  type: '자격증' | '논문' | '미정';
  status: string;
};

export type UserDetail = {
  studentId: string;
  period: string;
  name: string;
  professor: string;
  department: string;
  delay: number;
  etc: string;
};

export type Mode = 'detail' | 'application' | 'middleReport' | 'finalReport';

export interface StageData {
  key: string;
  stage: string;
  period: string;
  date: string;
  isSubmit: boolean;
}

export const STAGE_NAME_TO_MODE: Record<string, Mode> = {
  신청서: 'application',
  중간보고서: 'middleReport',
  최종보고서: 'finalReport',
} as const;

export const MODE_SUBTITLES: Record<Mode, string> = {
  detail: '학생 상세 보기',
  application: '신청서 관리',
  middleReport: '중간보고서 관리',
  finalReport: '최종보고서 관리',
} as const;
