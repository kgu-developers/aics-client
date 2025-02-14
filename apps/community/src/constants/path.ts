const PATH = {
  NOTICE: '/board/notice',
  NEWS: '/board/news',
  NOTICE_DETAIL: (id: number) => `${PATH.NOTICE}/${id}`,
  NEWS_DETAIL: (id: number) => `${PATH.NEWS}/${id}`,
};

export type pathmapKey = keyof typeof PATHMAP;

export interface TPathMap {
  [key: string]: {
    title: string;
    path: string;
    children?: TPathMap;
  };
}

const PATHMAP = {
  about: {
    title: '소개',
    path: '/about',
    children: {
      club: { title: '동아리 소개', path: '/club' },
      contact: { title: '찾아오시는 길', path: '/contact' },
      dept: { title: '학부 소개', path: '/dept' },
    },
  },
  member: { title: '구성원', path: '/member' },
  professor: { title: '교수진 소개', path: '/professor' },
  lab: { title: '연구실 소개', path: '/lab' },
  board: {
    title: '게시판',
    path: '/board',
    children: {
      notice: { title: '공지사항', path: '/notice' },
      news: { title: '학부 소식', path: '/news' },
    },
  },
  my: { title: '마이페이지', path: '/my' },
} as const satisfies TPathMap;

export { PATH, PATHMAP };
