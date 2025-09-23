import { usePostServicePostApiV1Posts } from '~/apis/admin/queries'
import { usePostServiceGetApiV1PostsKey } from '~/apis/community/queries'

import { MESSAGES, MESSAGE_DURATION } from '~/shared/constants/post.constants'
import { queryClient } from '~/shared/utils/'

interface UseCreatePostProps {
  messageApi: {
    open: (config: {
      type: 'success' | 'error'
      content: string
      duration?: number
    }) => void
  }
  historyBack: () => void
  onCancel: () => void
}

export function useCreatePost({
  messageApi,
  historyBack,
  onCancel,
}: UseCreatePostProps) {
  const mutation = usePostServicePostApiV1Posts({
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: [usePostServiceGetApiV1PostsKey],
      })
      await messageApi.open({
        type: 'success',
        content: MESSAGES.success.createPost,
        duration: MESSAGE_DURATION,
      })
      historyBack()
      onCancel()
    },
    onError: () => {
      messageApi.open({ type: 'error', content: MESSAGES.error.createPost })
    },
  })

  return { createPost: mutation.mutate }
}
