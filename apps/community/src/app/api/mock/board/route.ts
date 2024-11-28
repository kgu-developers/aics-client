import type { ResponseData } from '~/app/board/notice/remote';
import { board } from './data';

export function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 0; // 기본값 0
  const size = Number(url.searchParams.get('size')) || 10; // 기본값 10
  const keyword = url.searchParams.get('keyword') || '';
  const category =
    url.searchParams.get('category')?.toLowerCase().replace(/\s+/g, '') || '';

  // 필터링 로직
  const filteredBoards = board.filter((board) => {
    const matchesKeyword = board.title
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(keyword);
    const matchesCategory = category ? board.category === category : true;
    return matchesKeyword && matchesCategory;
  });

  const totalElements = filteredBoards.length;
  const totalPage = Math.ceil(totalElements / size);
  const pagedBoards = filteredBoards.slice(page * size, (page + 1) * size);

  const response: ResponseData = {
    contents: pagedBoards,
    pagable: {
      page,
      size,
      totalPage,
      totalElements,
      isEnd: page >= totalPage - 1,
    },
  };

  return Response.json({ data: response });
}
