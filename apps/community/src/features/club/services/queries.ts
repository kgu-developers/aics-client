import { queryOptions } from '@tanstack/react-query';

import { getClubs } from '~/features/club/services/remote';

const CLUB_QUERY_KEY = {
  ALL: ['clubs'],
} as const;

const CLUB_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: CLUB_QUERY_KEY.ALL,
      queryFn: () => getClubs(),
    }),
};

export { CLUB_QUERY_KEY, CLUB_QUERY_OPTIONS };
