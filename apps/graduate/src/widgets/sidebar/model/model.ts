import { ROUTE } from '~/shared/constants/route';

export const adminMenuSections = [
  {
    title: '메뉴 관리',
    items: [
      { label: '공지사항', to: ROUTE.NOTICE },
      { label: '안내 및 내규', to: ROUTE.RULE },
      { label: '진행 일정', to: ROUTE.SCHEDULE },
    ],
  },
  {
    title: '졸업생 관리',
    items: [
      { label: '대상자 전체 관리', to: ROUTE.ALL },
      { label: '자격증 신청 관리', to: ROUTE.CERTIFICATION },
      { label: '졸업 논문 관리', to: ROUTE.THESIS },
    ],
  },
] as const;
