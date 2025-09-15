import { Button, Modal } from 'antd'

import { HeroImageForm } from './HeroImageForm'

import { useModal } from '~/hooks/use-modal'
import { MESSAGES } from '../constant/constants'

export const HeroImageCreator = () => {
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
        <HeroImageForm onClose={closeModal} />
      </Modal>
      <Button
        type="primary"
        variant="solid"
        className="mb-4"
        onClick={openModal}
      >
        {MESSAGES.button.uploadImage}
      </Button>
    </>
  )
}
