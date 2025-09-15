import { Button, Modal } from 'antd'
import { PencilIcon } from 'lucide-react'

import { HeroImageForm } from '../HeroImageForm'

import { useModal } from '~/hooks/use-modal'
import { MESSAGES } from '../../constant/constants'

import type { CarouselResponse } from '~/apis/community/requests'

interface EditHeroImageButtonProps {
  image: CarouselResponse
}

export const EditHeroImageButton = ({ image }: EditHeroImageButtonProps) => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={MESSAGES.title.createImage}
        width={500}
        footer={null}
      >
        <HeroImageForm onClose={closeModal} image={image} />
      </Modal>
      <Button
        icon={<PencilIcon size={'1rem'} />}
        color="primary"
        variant="solid"
        onClick={openModal}
      >
        {MESSAGES.button.update}
      </Button>
    </>
  )
}
