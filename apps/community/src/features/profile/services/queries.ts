import { queryOptions } from '@tanstack/react-query'
import { getMyProfile } from '../../../apis/my/remotes'

const MY_PROFILE_QUERY_KEYS = {
  ALL: () => ['my'],
  PROFILE: () => [...MY_PROFILE_QUERY_KEYS.ALL(), 'profile'],
} as const

const MY_PROFILE_QUERY_OPTIONS = {
  PROFILE: () =>
    queryOptions({
      queryKey: MY_PROFILE_QUERY_KEYS.PROFILE(),
      queryFn: () => getMyProfile(),
    }),
}

export { MY_PROFILE_QUERY_KEYS, MY_PROFILE_QUERY_OPTIONS }
