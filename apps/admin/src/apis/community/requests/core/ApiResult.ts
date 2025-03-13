export type ApiResult<TData = unknown> = {
  readonly body: TData;
  readonly ok: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly url: string;
};
