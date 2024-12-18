import { queryOptions } from '@tanstack/react-query';

import { getLabs } from './remote';

const queryKeys = {
  all: ['labs'] as const,
};

const labsQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.all,
      queryFn: () => getLabs(),
    }),
};

export { labsQueryOptions };
