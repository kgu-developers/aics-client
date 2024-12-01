interface Board {
  postId: number;
  title: string;
  author: string;
  views: number;
  category: string;
  hasAttachment: boolean;
  isPinned: boolean;
  createAt: string;
}

interface Pagable {
  page: number;
  size: number;
  totalPage: number;
  totalElements: number;
  isEnd: boolean;
}

interface Boards {
  contents: Board[];
  pagable: Pagable;
}

export type { Board, Pagable, Boards };
