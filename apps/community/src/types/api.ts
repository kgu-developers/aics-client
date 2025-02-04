type BaseResponse<T> = {
  contents: T;
};

type PaginationResponse<T> = BaseResponse<{
  contents: T[];
  pagable: Pagable;
}>;

interface Pagable {
  page: number;
  size: number;
  totalPage: number;
  totalElements: number;
  isEnd: boolean;
}

export type { BaseResponse, PaginationResponse, Pagable };
