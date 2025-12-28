export interface NoticeApiResponse {
  postId: number;
  category: string;
  title: string;
  author: string;
  description: string;
  views: number;
  hasAttachment: boolean;
  isPinned: boolean;
  createdAt: string;
}

export interface NoticeDetailApiResponse {
  postId: number;
  category: string;
  title: string;
  author: string;
  content: string;
  isPinned: boolean;
  file?: {
    physicalPath: string;
  };
  createdAt: string;
}

export interface CreateNoticeRequest {
  title: string;
  content: string;
  isPinned: boolean;
  category: 'GRADUATION';
  fileId?: number;
}

export interface UpdateNoticeRequest {
  title: string;
  content: string;
  isPinned: boolean;
  fileId?: number;
}

export interface TogglePinnedRequest {
  isPinned: boolean;
}
