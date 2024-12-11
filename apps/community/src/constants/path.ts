const PATH = {
  NOTICE: '/board/notice',
  NEWS: '/board/news',
  NOTICE_DETAIL: (id: number) => `${PATH.NOTICE}/${id}`,
  NEWS_DETAIL: (id: number) => `${PATH.NEWS}/${id}`,
};

export { PATH };
