import { queryOptions } from '@tanstack/react-query';

import { getHero, getRecentNews, getRecentNotices } from './remote';

const MAIN_QUERY_KEYS = {
  ALL: () => ['main'],
  CAROUSEL: () => [...MAIN_QUERY_KEYS.ALL(), 'carousel'],
  NEWS: () => [...MAIN_QUERY_KEYS.ALL(), 'news'],
  NOTICES: () => [...MAIN_QUERY_KEYS.ALL(), 'notices'],
} as const;

const MAIN_QUERY_OPTIONS = {
  CAROUSEL: () =>
    queryOptions({
      queryKey: MAIN_QUERY_KEYS.CAROUSEL(),
      queryFn: () => getHero(),
    }),
  NEWS: () =>
    queryOptions({
      queryKey: MAIN_QUERY_KEYS.NEWS(),
      queryFn: () => getRecentNews(),
    }),
  NOTICES: () =>
    queryOptions({
      queryKey: MAIN_QUERY_KEYS.NOTICES(),
      queryFn: () => getRecentNotices(),
    }),
};

export { MAIN_QUERY_KEYS, MAIN_QUERY_OPTIONS };
