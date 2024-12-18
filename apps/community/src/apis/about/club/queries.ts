import { queryOptions } from '@tanstack/react-query';
import { getClubs } from './remote';

const queryKeys = {
  all: ['clubs'] as const,
};

const clubQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.all,
      queryFn: () => getClubs(),
    }),
};

export { clubQueryOptions };
