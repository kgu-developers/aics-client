import { queryOptions } from '@tanstack/react-query';
import { getContacts } from './remote';

const queryKeys = {
  all: ['contacts'] as const,
};

const contactQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: queryKeys.all,
      queryFn: () => getContacts(),
    }),
};

export { contactQueryOptions };
