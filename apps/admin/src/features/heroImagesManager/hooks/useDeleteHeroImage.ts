import { useCarouselServiceDeleteApiV1CarouselsById } from '~/apis/admin/queries'
import { useCarouselServiceGetApiV1CarouselsKey } from '~/apis/community/queries'
import { queryClient } from '~/utils/get-query-client'
import { MESSAGES } from '../constant/constants'

import type { MessageInstance } from 'antd/es/message/interface'

interface useDeleteHeroImageProps {
  open: MessageInstance['open']
}

export const useDeleteHeroImage = ({ open }: useDeleteHeroImageProps) => {
  const mutation = useCarouselServiceDeleteApiV1CarouselsById({
    onSuccess: () => {
      open({
        type: 'success',
        content: MESSAGES.success.deleteImage,
      })
      queryClient.invalidateQueries({
        queryKey: [useCarouselServiceGetApiV1CarouselsKey],
      })
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.deleteImage,
      })
    },
  })

  return { deleteHeroImage: mutation.mutate }
}
