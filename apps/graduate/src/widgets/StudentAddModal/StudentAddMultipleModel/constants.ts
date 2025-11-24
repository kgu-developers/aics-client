import type { CapstoneStatus } from '../types';

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
  capstone: '캡스톤이수여부',
  graduation: '졸업년도',
  department: '학과',
} as const;
