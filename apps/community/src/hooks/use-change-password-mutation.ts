import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MY_PROFILE_QUERY_KEYS } from '~/apis/my/queries';
import { type MyPassword, patchChangePassword } from '~/apis/my/remotes';

export const useChangePasswordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MyPassword) => patchChangePassword(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MY_PROFILE_QUERY_KEYS.PROFILE(),
      });
    },

    onError: (e) => {
      console.log(e);
    },
  });
};
