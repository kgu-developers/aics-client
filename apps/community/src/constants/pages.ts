interface Path {
  title: string;
  url: string;
}

interface Page {
  id: string;
  base: string;
  path: Path[];
}

const PAGES: Page[] = [
  {
    id: 'about',
    base: '/about',
    path: [
      {
        title: ' 동아리 소개',
        url: '/club',
      },
      {
        title: '찾아오시는 길',
        url: '/contact',
      },
      {
        title: '학부 소개',
        url: '/dept',
      },
    ],
  },
  {
    id: 'board',
    base: '/board',
    path: [
      {
        title: '학부 소식',
        url: '/dept',
      },
      {
        title: '공지사항',
        url: '/notice',
      },
    ],
  },
  {
    id: 'lab',
    base: '/lab',
    path: [
      {
        title: '연구실 소개',
        url: '/',
      },
    ],
  },
  {
    id: 'member',
    base: '/member',
    path: [
      {
        title: '교수진 소개',
        url: '/professor',
      },
    ],
  },
  {
    id: 'my',
    base: '/my',
    path: [
      {
        title: '내 정보',
        url: '/',
      },
      {
        title: '비밀번호 변경',
        url: '/change-password',
      },
    ],
  },
] as const;

export { PAGES };
