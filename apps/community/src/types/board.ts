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

export type { Board };
