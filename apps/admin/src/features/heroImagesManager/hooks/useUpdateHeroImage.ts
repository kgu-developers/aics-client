import { useCarouselServicePatchApiV1CarouselsById } from '~/apis/admin/queries'
import { useCarouselServiceGetApiV1CarouselsKey } from '~/apis/community/queries'
import { queryClient } from '~/shared/utils/'
import { MESSAGES } from '../constant/constants'

import type { MessageInstance } from 'antd/es/message/interface'

interface useUpdateHeroImageProps {
  onClose: () => void
  resetFields: () => void
  open: MessageInstance['open']
}

export const useUpdateHeroImage = ({
  onClose,
  resetFields,
  open,
}: useUpdateHeroImageProps) => {
  const mutation = useCarouselServicePatchApiV1CarouselsById({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [useCarouselServiceGetApiV1CarouselsKey],
      })
      open({
        type: 'success',
        content: MESSAGES.success.updateImage,
      })
      onClose()
    },
    onError: () => {
      open({
        type: 'error',
        content: MESSAGES.error.updateImage,
      })
      resetFields()
      onClose()
    },
  })

  return { updateHeroImage: mutation.mutate }
}
