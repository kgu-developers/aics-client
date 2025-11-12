import { queryOptions } from '@tanstack/react-query';

import { getLabs } from '~/features/lab/services/remote';

const LABS_QUERY_KEYS = {
  ALL: ['labs'],
} as const;

const LABS_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: LABS_QUERY_KEYS.ALL,
      queryFn: () => getLabs(),
    }),
};

export { LABS_QUERY_KEYS, LABS_QUERY_OPTIONS };
