const PATH = {
  NOTICE: '/board/notice',
  NEWS: '/board/news',
  NOTICE_DETAIL: (id: number) => `${PATH.NOTICE}/${id}`,
  NEWS_DETAIL: (id: number) => `${PATH.NEWS}/${id}`,
};

type pathmapKey = keyof typeof PATHMAP;

const PATHMAP = {
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
  notice: '공지 사항',
  news: '학부 소식',
  my: '마이페이지',
  'change-password': '비밀번호 변경',
} as const;

export { PATH, PATHMAP, type pathmapKey };
