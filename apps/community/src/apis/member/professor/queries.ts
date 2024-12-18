import { queryOptions } from '@tanstack/react-query';
import { getProfessors } from './remote';

const queryKeys = {
  all: ['contacts'] as const,
};

const professorQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.all,
      queryFn: () => getProfessors(),
    }),
};

export { professorQueryOptions };
