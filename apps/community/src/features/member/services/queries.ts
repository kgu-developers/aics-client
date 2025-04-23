import { queryOptions } from '@tanstack/react-query'

import { getProfessors } from '~/features/member/services/remote'

const PROFESSORS_QUERY_KEYS = {
  ALL: ['contacts'],
} as const

const PROFESSORS_QUERY_OPTIONS = {
  ALL: () =>
    queryOptions({
      queryKey: PROFESSORS_QUERY_KEYS.ALL,
      queryFn: () => getProfessors(),
    }),
}

export { PROFESSORS_QUERY_KEYS, PROFESSORS_QUERY_OPTIONS }
