export const adminMenuSections = [
  {
    title: '메뉴 관리',
    items: [
      { label: '공지사항', to: '/notices' },
      { label: '안내 및 내규', to: '/guidelines-and-rules' },
      { label: '진행 일정', to: '/schedule' },
    ],
  },
  {
    title: '졸업생 관리',
    items: [
      { label: '대상자 전체 관리', to: '/graduates-all' },
      { label: '자격증 신청 관리', to: '/certification-management' },
      { label: '논문 신청 관리', to: '/thesis-management' },
    ],
  },
] as const;
