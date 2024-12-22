import { queryOptions } from '@tanstack/react-query';
import { getDepts } from './remote';

const DEPT_QUERY_KEYS = {
  ALL: ['depts'],
} as const;

const DEPT_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: DEPT_QUERY_KEYS.ALL,
      queryFn: () => getDepts(),
    }),
};

export { DEPT_QUERY_KEYS, DEPT_QUERY_OPTIONS };
