import { useLabServicePostApiV1Labs } from '~/apis/admin/queries'
import { useLabServiceGetApiV1LabsKey } from '~/apis/community/queries'
import { queryClient } from '~/shared/utils/'
import { MESSAGES } from '../constant/constants'

import type { MessageInstance } from 'antd/es/message/interface'

interface useCreateLabProps {
  onClose: () => void
  resetFields: () => void
  open: MessageInstance['open']
}

export const useCreateLab = ({
  onClose,
  resetFields,
  open,
}: useCreateLabProps) => {
  const mutation = useLabServicePostApiV1Labs({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [useLabServiceGetApiV1LabsKey],
      })
      await open({
        type: 'success',
        content: MESSAGES.success.createLab,
        duration: 0.8,
      })
      resetFields()
      onClose()
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.createLab,
      })
    },
  })

  return { createLab: mutation.mutate }
}
