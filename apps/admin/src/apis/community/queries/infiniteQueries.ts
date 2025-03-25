// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  InfiniteData,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { PostService } from '../requests/services.gen';
import * as Common from './common';
export const usePostServiceGetApiV1PostsInfinite = <
  TData = InfiniteData<Common.PostServiceGetApiV1PostsDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    category,
    keywords,
    size,
  }: {
    category?: 'NOTIFICATION' | 'NEWS';
    keywords?: string[];
    size: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseInfiniteQueryOptions<TData, TError>,
    'queryKey' | 'queryFn'
  >,
) =>
  useInfiniteQuery({
    queryKey: Common.UsePostServiceGetApiV1PostsKeyFn(
      { category, keywords, size },
      queryKey,
    ),
    queryFn: ({ pageParam }) =>
      PostService.getApiV1Posts({
        category,
        keywords,
        page: pageParam as number,
        size,
      }) as TData,
    initialPageParam: '1',
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
