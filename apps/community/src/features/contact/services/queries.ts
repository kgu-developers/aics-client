import { queryOptions } from '@tanstack/react-query';

import { getContacts } from '~/features/contact/services/remote';

const CONTACT_QUERY_KEYS = {
  ALL: ['contacts'],
} as const;

const CONTACT_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: CONTACT_QUERY_KEYS.ALL,
      queryFn: () => getContacts(),
    }),
};

export { CONTACT_QUERY_KEYS, CONTACT_QUERY_OPTIONS };
