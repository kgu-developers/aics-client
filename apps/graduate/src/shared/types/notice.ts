export interface NoticeApiResponse {
  postId: number;
  category: string;
  title: string;
  author: string;
  description: string;
  content?: string;
  views: number;
  hasAttachment: boolean;
  isPinned: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateNoticeRequest {
  title: string;
  content: string;
  isPinned: boolean;
}

export interface UpdateNoticeRequest {
  title: string;
  content: string;
}

export interface TogglePinnedRequest {
  isPinned: boolean;
}
