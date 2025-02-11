import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MY_PROFILE_QUERY_KEYS } from '~/apis/my/queries';
import { type MyProfileUpdate, patchMyProfile } from '~/apis/my/remotes';

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MyProfileUpdate) => patchMyProfile(data),

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
