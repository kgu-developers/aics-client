export type NoticeFormItem = {
  title: string
  content: string
  isPinned: boolean
  uploadedFiles?: string[]
}

export type NoticeItem = {
  id: number
  title: string
  createdAt: string
  isPinned: boolean
  author: string
}
