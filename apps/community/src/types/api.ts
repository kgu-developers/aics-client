type BaseResponse<T> = {
  contents: T;
};

type PaginationResponse<T> = {
  contents: T[];
  pageable: Pagable;
};

interface Pagable {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  isEnd: boolean;
}

export type { BaseResponse, PaginationResponse, Pagable };
