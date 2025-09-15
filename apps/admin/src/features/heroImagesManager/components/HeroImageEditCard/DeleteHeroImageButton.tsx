import { Button, message } from 'antd'
import { Trash2Icon } from 'lucide-react'

import { MESSAGES } from '../../constant/constants'
import { useDeleteHeroImage } from '../../hooks'

interface DeleteHeroImageButtonProps {
  id: number
}

export const DeleteHeroImageButton = ({ id }: DeleteHeroImageButtonProps) => {
  const [messageApi, contextHolder] = message.useMessage()
  const { deleteHeroImage } = useDeleteHeroImage({ open: messageApi.open })

  const handleDeleteImage = () => {
    deleteHeroImage({ id })
  }

  return (
    <>
      {contextHolder}
      <Button
        icon={<Trash2Icon size={'1rem'} />}
        color="danger"
        variant="solid"
        onClick={handleDeleteImage}
      >
        {MESSAGES.button.delete}
      </Button>
    </>
  )
}
