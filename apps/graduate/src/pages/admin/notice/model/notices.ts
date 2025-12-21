export interface NoticeItem {
  noticeId: number;
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

export type NoticeFormItem = {
  title: string;
  content: string;
  isPinned: boolean;
  uploadedFiles?: string[];
};
