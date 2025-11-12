// generated with @7nohe/openapi-react-query-codegen@1.6.2

import type { QueryClient } from '@tanstack/react-query';

import * as Common from './common';
import { UserService } from '../requests/services.gen';
export const ensureUseUserServiceGetApiV1UsersData = (
  queryClient: QueryClient,
  {
    name,
    page,
    size,
  }: {
    name?: string;
    page: number;
    size: number;
  },
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseUserServiceGetApiV1UsersKeyFn({ name, page, size }),
    queryFn: () => UserService.getApiV1Users({ name, page, size }),
  });
