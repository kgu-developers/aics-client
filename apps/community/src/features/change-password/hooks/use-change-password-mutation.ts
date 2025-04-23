import { useMutation, useQueryClient } from '@tanstack/react-query'

import { MY_PROFILE_QUERY_KEYS } from '~/features/profile/services/queries'
import {
  type MyPassword,
  patchChangePassword,
} from '~/features/profile/services/remotes'

export const useChangePasswordMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: MyPassword) => patchChangePassword(data),

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
