import { queryOptions } from '@tanstack/react-query';
import { getDepts } from './remote';

const queryKeys = {
  all: ['depts'] as const,
};

const deptQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.all,
      queryFn: () => getDepts(),
    }),
};

export { deptQueryOptions };
