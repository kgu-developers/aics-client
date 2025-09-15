import { useCarouselServicePostApiV1Carousels } from '~/apis/admin/queries'
import { useCarouselServiceGetApiV1CarouselsKey } from '~/apis/community/queries'
import { queryClient } from '~/utils/get-query-client'
import { MESSAGES } from '../constant/constants'

import type { MessageInstance } from 'antd/es/message/interface'

interface useCreateHeroImageProps {
  onClose: () => void
  resetFields: () => void
  open: MessageInstance['open']
}

export const useCreateHeroImage = ({
  onClose,
  resetFields,
  open,
}: useCreateHeroImageProps) => {
  const mutation = useCarouselServicePostApiV1Carousels({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [useCarouselServiceGetApiV1CarouselsKey],
      })
      open({
        type: 'success',
        content: MESSAGES.success.createImage,
      })
      onClose()
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.createImage,
      })
      resetFields()
      onClose()
    },
  })

  return { createHeroImage: mutation.mutate }
}
