import type { CapstoneStatus } from '../../types';

export const CAPSTONE_MAP: Record<string, CapstoneStatus> = {
  이수: 'PASSED',
  미이수: 'FAILED',
  passed: 'PASSED',
  failed: 'FAILED',
};

export const HEADER_NAMES = {
  studentNo: '학번',
  name: '이름',
  advisor: '지도교수',
  capstone: '캡스톤 이수 여부',
  graduation: '졸업 예정',
  department: '학과',
} as const;
