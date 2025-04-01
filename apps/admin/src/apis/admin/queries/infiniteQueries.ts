// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  type InfiniteData,
  type UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { UserService } from '../requests/services.gen';
import * as Common from './common';
export const useUserServiceGetApiV1UsersInfinite = <
  TData = InfiniteData<Common.UserServiceGetApiV1UsersDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    name,
    size,
  }: {
    name?: string;
    size: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<
    UseInfiniteQueryOptions<TData, TError>,
    'queryKey' | 'queryFn'
  >,
) =>
  useInfiniteQuery({
    queryKey: Common.UseUserServiceGetApiV1UsersKeyFn({ name, size }, queryKey),
    queryFn: ({ pageParam }) =>
      UserService.getApiV1Users({
        name,
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
