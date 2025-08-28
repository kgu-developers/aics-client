const PATH = {
  MAIN: '/',
  NOTICE: '/notice',
  NEWS: '/news',
  NOTICE_DETAIL: (id: number) => `${PATH.NOTICE}/${id}`,
  NEWS_DETAIL: (id: number) => `${PATH.NEWS}/${id}`,
  SIGN_IN: '/signin',
  MY: '/my',
}

export type pathmapKey = keyof typeof PATHMAP
export type pathTitleKey = keyof typeof PATH_TITLES

export interface TPathMap {
  [key: string]: {
    title: string
    path: string
    children?: TPathMap
  }
}

const PATHMAP = {
  about: {
    title: '소개',
    path: '/about',
    children: {
      dept: {
        title: '학부 소개',
        path: '/dept',
      },
      club: {
        title: '동아리 소개',
        path: '/club',
      },
      contact: {
        title: '찾아오시는 길',
        path: '/contact',
      },
    },
  },
  member: {
    title: '구성원',
    path: '/member',
    children: {
      professor: {
        title: '교수진 소개',
        path: '/professor',
      },
    },
  },
  lab: {
    title: '연구실 소개',
    path: '/lab',
  },
  board: {
    title: '게시판',
    path: '/board',
    children: {
      notice: {
        title: '공지사항',
        path: '/notice',
      },
      news: {
        title: '학부 소식',
        path: '/news',
      },
    },
  },
  my: {
    title: '마이페이지',
    path: '/my',
    children: {
      my: {
        title: '마이페이지',
        path: '/my',
      },
      'change-password': {
        title: '비밀번호 변경',
        path: '/my/change-password',
      },
    },
  },
} as const satisfies TPathMap

const PATH_TITLES = {
  about: '소개',
  dept: '학부 소개',
  club: '동아리',
  contact: '찾아오시는 길',
  curriculum: '교육과정',
  history: '연혁',
  member: '구성원',
  professor: '교수진 소개',
  research: '연구',
  lab: '연구실 소개',
  board: '게시판',
  notice: '공지사항',
  news: '학부소식',
  my: '마이페이지',
  'change-password': '비밀번호 변경',
}

export { PATH, PATHMAP, PATH_TITLES }
