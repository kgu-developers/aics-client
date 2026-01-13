import ROUTE from './route';

export const GRADUATION_STATUS = {
  GRADUATION_TYPE_NOT_SUBMITTED: 'GRADUATION_TYPE_NOT_SUBMITTED',
  PROFESSOR_NOT_ASSIGNED: 'PROFESSOR_NOT_ASSIGNED',
  MID_THESIS_NOT_SUBMITTED: 'MID_THESIS_NOT_SUBMITTED',
  FINAL_THESIS_NOT_SUBMITTED: 'FINAL_THESIS_NOT_SUBMITTED',
  CERTIFICATE_NOT_SUBMITTED: 'CERTIFICATE_NOT_SUBMITTED',
  GRADUATION_REQUIREMENTS_MET: 'GRADUATION_REQUIREMENTS_MET',
} as const;

export const GRADUATION_TYPE = {
  THESIS: 'THESIS',
  CERTIFICATION: 'CERTIFICATION',
} as const;

export const ROLE = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

export type GraduationStatus =
  (typeof GRADUATION_STATUS)[keyof typeof GRADUATION_STATUS];
export type GraduationType =
  (typeof GRADUATION_TYPE)[keyof typeof GRADUATION_TYPE];
export type Role = (typeof ROLE)[keyof typeof ROLE];
export const GRADUATION_STATUS_TEXT: Record<GraduationStatus, string> = {
  [GRADUATION_STATUS.GRADUATION_TYPE_NOT_SUBMITTED]: '기타',
  [GRADUATION_STATUS.PROFESSOR_NOT_ASSIGNED]: '지도교수 배정',
  [GRADUATION_STATUS.MID_THESIS_NOT_SUBMITTED]: '중간 논문',
  [GRADUATION_STATUS.FINAL_THESIS_NOT_SUBMITTED]: '최종 논문',
  [GRADUATION_STATUS.CERTIFICATE_NOT_SUBMITTED]: '자격증 증빙',
  [GRADUATION_STATUS.GRADUATION_REQUIREMENTS_MET]: '졸업 승인',
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
  [GRADUATION_STATUS.GRADUATION_TYPE_NOT_SUBMITTED]: {
    title: '아직 졸업 요건 취득 방식을 지정하지 않았어요.',
    description: `졸업 요건 취득 방식 신청 기간이에요.
    요건 취득 방식을 정해 신청해주세요.`,
    button: {
      label: `졸업 요건 취득 방식 
      지정하기`,
      href: ROUTE.APPLY,
    },
  },
  [GRADUATION_STATUS.PROFESSOR_NOT_ASSIGNED]: {
    title: '지도교수가 배정되지 않았어요.',
    description: `지도교수 배정 신청을 진행해주세요.
    지도교수 배정 후 졸업 논문 작성을 시작할 수 있어요.`,
    button: {
      label: '지도교수 배정 신청하기',
      href: ROUTE.APPLY,
    },
  },
  [GRADUATION_STATUS.MID_THESIS_NOT_SUBMITTED]: {
    title: '중간 보고서를 제출하지 않았어요.',
    description: `중간 보고서를 제출해주세요.
    중간 보고서 마감 기한은 2026년 1월 31일까지에요.`,
    button: {
      label: '중간 보고서 제출하기',
      href: ROUTE.THESIS_MIDREPORT,
    },
  },
  [GRADUATION_STATUS.FINAL_THESIS_NOT_SUBMITTED]: {
    title: '최종 보고서를 제출하지 않았어요.',
    description: `최종 보고서를 제출해주세요.
    최종 보고서 마감 기한은 2026년 2월 28일까지에요.`,
    button: {
      label: '최종 보고서 제출하기',
      href: ROUTE.THESIS_FINALREPORT,
    },
  },
  [GRADUATION_STATUS.CERTIFICATE_NOT_SUBMITTED]: {
    title: '자격증 증빙 문서를 제출하지 않았어요.',
    description: `자격증 증빙 문서를 제출해주세요.
    자격증 증빙 문서 마감 기한은 2026년 3월 31일까지에요.`,
    button: {
      label: `자격증 증빙 문서 
      제출하기`,
      href: ROUTE.CERTIFICATION,
    },
  },
  [GRADUATION_STATUS.GRADUATION_REQUIREMENTS_MET]: {
    title: '졸업 승인이 완료되었어요.',
    description: `졸업 요건이 모두 충족되었어요.
    졸업 승인 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
} as const;
