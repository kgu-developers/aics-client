type ContentResponse<T> = {
  content: T
}

type ContentsResponse<T> = {
  contents: T
}

type PaginationResponse<T> = {
  contents: T[]
  pageable: Pagable
}

interface Pagable {
  page: number
  size: number
  totalPages: number
  totalElements: number
  isEnd: boolean
}

export type { ContentResponse, ContentsResponse, PaginationResponse, Pagable }
