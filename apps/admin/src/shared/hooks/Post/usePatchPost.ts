import { usePostServicePatchApiV1PostsByPostId } from '~/apis/admin/queries'
import { usePostServiceGetApiV1PostsKey } from '~/apis/community/queries'

import { MESSAGES } from '~/shared/constant/post.constants'
import { queryClient } from '~/shared/utils/'

interface UsePatchPostProps {
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

export function usePatchPost({
  messageApi,
  historyBack,
  onCancel,
}: UsePatchPostProps) {
  const mutation = usePostServicePatchApiV1PostsByPostId({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [usePostServiceGetApiV1PostsKey],
      })
      messageApi.open({
        type: 'success',
        content: MESSAGES.success.updatePost,
        duration: 0.7,
      })
      historyBack()
      onCancel()
    },
    onError: () => {
      messageApi.open({ type: 'error', content: MESSAGES.error.updatePost })
    },
  })

  return { patchPost: mutation.mutate }
}
