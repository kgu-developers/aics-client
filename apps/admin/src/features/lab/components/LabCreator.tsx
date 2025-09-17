import { Button, Modal } from 'antd'

import { LabForm } from './LabForm'

import { useModal } from '~/hooks/use-modal'
import { MESSAGES } from '../constant/constants'

export const LabCreator = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={MESSAGES.title.createLab}
        width={500}
        footer={null}
      >
        <LabForm onClose={closeModal} />
      </Modal>
      <Button
        type="primary"
        variant="solid"
        className="mb-4"
        onClick={openModal}
      >
        {MESSAGES.button.createLab}
      </Button>
    </>
  )
}
