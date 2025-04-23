import { useMutation, useQueryClient } from '@tanstack/react-query'

import { MY_PROFILE_QUERY_KEYS } from '~/features/profile/services/queries'
import {
  type MyProfileUpdate,
  patchMyProfile,
} from '~/features/profile/services/remotes'

export const useEditProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: MyProfileUpdate) => patchMyProfile(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MY_PROFILE_QUERY_KEYS.PROFILE(),
      })
    },

    onError: (e) => {
      console.log(e)
    },
  })
}
