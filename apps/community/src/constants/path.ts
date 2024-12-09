const PATH = {
  NOTICE: '/board/notice',
  NOTICE_DETAIL: (id: number) => `/board/notice/${id}`,
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
} as const;

export { PATH, PATHMAP, type pathmapKey };
