export type MenuItem = {
  label: string
  to: string
}

export type MenuSection = {
  title: string
  items: MenuItem[]
}

export const adminMenuSections: MenuSection[] = [
  {
    title: '메뉴 관리',
    items: [
      { label: '공지사항', to: '/admin/notices' },
      { label: '안내 및 내규', to: '/admin/guidelines-and-rules' },
      { label: '진행 일정', to: '/admin/schedule' },
    ],
  },
  {
    title: '졸업생 관리',
    items: [
      { label: '대상자 전체 관리', to: '/admin/graduates-all' },
      { label: '자격증 신청 관리', to: '/admin/certification-management' },
      { label: '논문 신청 관리', to: '/admin/thesis-application-management' },
    ],
  },
]
