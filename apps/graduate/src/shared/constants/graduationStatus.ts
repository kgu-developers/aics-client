import ROUTE from './route';

export const GRADUATION_STATUS = {
  APPROVED: 'APPROVED',
  CERTIFICATE: 'CERTIFICATE',
  MIDTHESIS: 'MIDTHESIS',
  FINALTHESIS: 'FINALTHESIS',
  SUBMITTED: 'SUBMITTED',
  OTHER: 'OTHER',
} as const;

export const GRADUATION_TYPE = {
  THESIS: 'THESIS',
  CERTIFICATION: 'CERTIFICATION',
} as const;

export type GraduationStatus =
  (typeof GRADUATION_STATUS)[keyof typeof GRADUATION_STATUS];
export type GraduationType =
  (typeof GRADUATION_TYPE)[keyof typeof GRADUATION_TYPE];

export const GRADUATION_STATUS_TEXT: Record<GraduationStatus, string> = {
  [GRADUATION_STATUS.APPROVED]: '졸업 승인',
  [GRADUATION_STATUS.CERTIFICATE]: '자격증 증빙',
  [GRADUATION_STATUS.MIDTHESIS]: '졸업 논문',
  [GRADUATION_STATUS.FINALTHESIS]: '졸업 논문',
  [GRADUATION_STATUS.SUBMITTED]: '졸업 논문',
  [GRADUATION_STATUS.OTHER]: '기타',
};

type StatusItem = {
  title: string;
  description: string;
  button: {
    label: string;
    href: (typeof ROUTE)[keyof typeof ROUTE];
  };
};

export const STATUS_TEXT: Record<GraduationStatus, StatusItem> = {
  [GRADUATION_STATUS.OTHER]: {
    title: '아직 졸업 요건 취득 방식을 지정하지 않았어요.',
    description: `졸업 요건 취득 방식 신청 기간이에요.
    요건 취득 방식을 정해 신청해주세요.`,
    button: {
      label: `졸업 요건 취득 방식 
      지정하기`,
      href: ROUTE.APPLY,
    },
  },
  [GRADUATION_STATUS.MIDTHESIS]: {
    title: '중간 보고서를 제출하지 않았어요.',
    description: `중간 보고서를 제출해주세요.
    중간 보고서 마감 기한은 2026년 1월 31일까지에요.`,
    button: {
      label: '중간 보고서 제출하기',
      href: ROUTE.THESIS_MIDREPORT,
    },
  },
  [GRADUATION_STATUS.FINALTHESIS]: {
    title: '최종 보고서를 제출하지 않았어요.',
    description: `최종 보고서를 제출해주세요.
    최종 보고서 마감 기한은 2026년 2월 28일까지에요.`,
    button: {
      label: '최종 보고서 제출하기',
      href: ROUTE.THESIS_FINALREPORT,
    },
  },
  [GRADUATION_STATUS.SUBMITTED]: {
    title: '보고서 제출이 완료되었어요.',
    description: `졸업 논문에 대한 문서 제출이 모두 완료되었어요.
    졸업 논문 심사 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
  [GRADUATION_STATUS.CERTIFICATE]: {
    title: '자격증 증빙 문서를 제출하지 않았어요.',
    description: `자격증 증빙 문서를 제출해주세요.
    자격증 증빙 문서 마감 기한은 2026년 3월 31일까지에요.`,
    button: {
      label: `자격증 증빙 문서 
      제출하기`,
      href: ROUTE.CERTIFICATION,
    },
  },
  [GRADUATION_STATUS.APPROVED]: {
    title: '졸업 승인이 완료되었어요.',
    description: `졸업 요건이 모두 충족되었어요.
    졸업 승인 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
} as const;
