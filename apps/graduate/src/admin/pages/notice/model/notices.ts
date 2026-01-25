export type NoticeItem = {
  noticeId: number;
  category: string;
  title: string;
  author: string;
  description: string;
  views: number;
  hasAttachment: boolean;
  isPinned: boolean;
  createdAt: string;
};

export type NoticeDetailItem = {
  noticeId: number;
  category: string;
  title: string;
  author: string;
  content: string;
  isPinned: boolean;
  file?: {
    physicalPath: string;
  };
  createdAt: string;
};

export type NoticeFormItem = {
  title: string;
  content: string;
  isPinned: boolean;
  category: 'GRADUATION';
  fileId?: number;
};
