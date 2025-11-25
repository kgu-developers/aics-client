import type { CapstoneStatus } from '../types/studentAddModal';

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

export const MODE_OPTIONS = [
  {
    key: 'single',
    title: '단일 추가',
    description: '학생 정보를 수기로 입력해요.',
  },
  {
    key: 'excel',
    title: '엑셀 업로드',
    description: '엑셀 파일로 여러 명 입력해요.',
  },
] as const;

export type StudentAddMode = (typeof MODE_OPTIONS)[number]['key'];

export const CAPSTONE_OPTIONS: Array<{ label: string; value: CapstoneStatus }> =
  [
    { label: '이수', value: 'PASSED' },
    { label: '미이수', value: 'FAILED' },
  ];

export const SINGLE_FIELD_TEXT = {
  studentNo: {
    label: '학번',
    placeholder: '학번을 입력해주세요',
    required: '학번을 입력하세요',
    pattern: '학번은 숫자 9자리여야 합니다 .',
  },
  name: {
    label: '이름',
    placeholder: '이름을 입력해주세요',
    required: '이름을 입력해주세요',
  },
  advisor: {
    label: '지도교수 배정',
    placeholder: '지도교수를 선택해주세요',
    required: '지도교수를 선택해주세요',
  },
  capstone: {
    label: '캡스톤 이수 여부',
    required: '캡스톤 이수 여부를 선택해주세요',
  },
  graduationMonth: {
    label: '졸업년도',
    placeholder: 'YYYY-MM',
    required: '졸업 예정일을 선택해주세요',
  },
  department: {
    label: '학과',
    placeholder: '학과를 입력해주세요',
    required: '학과를 입력해주세요',
  },
  submitLabel: '입력',
};
