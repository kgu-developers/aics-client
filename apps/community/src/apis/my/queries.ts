import { queryOptions } from '@tanstack/react-query';
import { getMyProfile } from './remotes';

const MY_PROFILE_QUERY_KEYS = {
  ALL: ['my'],
} as const;

const MY_PROFILE_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: MY_PROFILE_QUERY_KEYS.ALL,
      queryFn: () => getMyProfile(),
    }),
};

export { MY_PROFILE_QUERY_KEYS, MY_PROFILE_QUERY_OPTIONS };
