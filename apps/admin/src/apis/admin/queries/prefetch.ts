// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { type QueryClient } from '@tanstack/react-query';
import { UserService } from '../requests/services.gen';
import * as Common from './common';
export const prefetchUseUserServiceGetApiV1Users = (
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
  queryClient.prefetchQuery({
    queryKey: Common.UseUserServiceGetApiV1UsersKeyFn({ name, page, size }),
    queryFn: () => UserService.getApiV1Users({ name, page, size }),
  });
