import { ROUTE } from '~/shared/constants/route';

export const USER_STATUS = {
  UNSET: 'unset',
  THESIS_APPLIED: 'thesis_applied',
  THESIS_NOT_SUBMITTED: 'thesis_not_submitted',
  THESIS_MIDREPORT_SUBMITTED: 'thesis_midreport_submitted',
  THESIS_FINALREPORT_SUBMITTED: 'thesis_finalreport_submitted',
  CERTIFICATION_APPLIED: 'certification_applied',
  CERTIFICATION_NOT_SUBMITTED: 'certification_not_submitted',
  CERTIFICATION_SUBMITTED: 'certification_submitted',
} as const;

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

type StatusItem = {
  title: string;
  description: string;
  button: {
    label: string;
    href: (typeof ROUTE)[keyof typeof ROUTE];
  };
};

export const STATUS_TEXT: Record<UserStatus, StatusItem> = {
  [USER_STATUS.UNSET]: {
    title: '아직 졸업 요건 취득 방식을 지정하지 않았어요.',
    description: `졸업 요건 취득 방식 신청 기간이에요.
    요건 취득 방식을 정해 신청해주세요.`,
    button: {
      label: `졸업 요건 취득 방식 
      지정하기`,
      href: ROUTE.APPLY,
    },
  },
  [USER_STATUS.THESIS_APPLIED]: {
    title: '졸업 논문 신청이 완료되었어요.',
    description: `담당 교수 배정 후 졸업 논문 제출이 가능해요.
    졸업 논문 제출 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
  [USER_STATUS.THESIS_NOT_SUBMITTED]: {
    title: '중간 보고서를 제출하지 않았어요.',
    description: `중간 보고서를 제출해주세요.
    중간 보고서 마감 기한은 2026년 1월 31일까지에요.`,
    button: {
      label: '중간 보고서 제출하기',
      href: ROUTE.THESIS_MIDREPORT,
    },
  },
  [USER_STATUS.THESIS_MIDREPORT_SUBMITTED]: {
    title: '최종 보고서를 제출하지 않았어요.',
    description: `최종 보고서를 제출해주세요.
    최종 보고서 마감 기한은 2026년 2월 28일까지에요.`,
    button: {
      label: '최종 보고서 제출하기',
      href: ROUTE.THESIS_FINALREPORT,
    },
  },
  [USER_STATUS.THESIS_FINALREPORT_SUBMITTED]: {
    title: '보고서 제출이 완료되었어요.',
    description: `졸업 논문에 대한 문서 제출이 모두 완료되었어요.
    졸업 논문 심사 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
  [USER_STATUS.CERTIFICATION_APPLIED]: {
    title: '자격증 대체 방식 신청이 완료되었어요.',
    description: `담당 교수 배정 후 자격증 증빙 문서 제출이 가능해요.
    자격증 증빙 문서 제출 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
  [USER_STATUS.CERTIFICATION_NOT_SUBMITTED]: {
    title: '자격증 증빙 문서를 제출하지 않았어요.',
    description: `자격증 증빙 문서를 제출해주세요.
    자격증 증빙 문서 마감 기한은 2026년 3월 31일까지에요.`,
    button: {
      label: `자격증 증빙 문서 
      제출하기`,
      href: ROUTE.CERTIFICATION,
    },
  },
  [USER_STATUS.CERTIFICATION_SUBMITTED]: {
    title: '자격증 증빙 문서 제출이 완료되었어요.',
    description: `자격증 증빙 문서 제출이 완료되었어요.
    자격증 증빙 문서 심사 일정을 확인해주세요.`,
    button: {
      label: '일정 확인하기',
      href: ROUTE.STATUS,
    },
  },
} as const;
