// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { UserService } from '../requests/services.gen';
import * as Common from './common';
export const useUserServiceGetApiV1UsersSuspense = <
  TData = Common.UserServiceGetApiV1UsersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    page,
    size,
  }: {
    page: number;
    size: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseUserServiceGetApiV1UsersKeyFn({ page, size }, queryKey),
    queryFn: () => UserService.getApiV1Users({ page, size }) as TData,
    ...options,
  });
