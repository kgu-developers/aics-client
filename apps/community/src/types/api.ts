import type { Board, Pagable } from './board';

type BaseResponse<T> = {
  data: T;
};

interface PaginationResponse {
  contents: Board[];
  pagable: Pagable;
}

export type { BaseResponse, PaginationResponse };
