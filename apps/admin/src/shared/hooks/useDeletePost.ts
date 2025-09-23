import { usePostServicePatchApiV1PostsByPostIdDelete } from '~/apis/admin/queries'
import { usePostServiceGetApiV1PostsKey } from '~/apis/community/queries'

import { MESSAGES } from '~/shared/constants/post.constants'
import { queryClient } from '~/shared/utils/'

interface UseDeletePostProps {
  messageApi: {
    open: (config: {
      type: 'success' | 'error'
      content: string
      duration?: number
    }) => void
  }
  historyBack?: () => void
}

export const useDeletePost = ({
  messageApi,
  historyBack,
}: UseDeletePostProps) => {
  const mutation = usePostServicePatchApiV1PostsByPostIdDelete({
    onSuccess: () => {
      messageApi.open({
        type: 'success',
        content: MESSAGES.success.deletePost,
        duration: 0.7,
      })

      queryClient.invalidateQueries({
        queryKey: [usePostServiceGetApiV1PostsKey],
      })

      historyBack?.()
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: MESSAGES.error.deletePost,
      })
    },
  })

  return { deletePost: mutation.mutate }
}
