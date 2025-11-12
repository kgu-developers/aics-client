import { Button, Modal } from 'antd';

import { useModal } from '~/shared/hooks/useModal';

import { HeroImageForm } from './HeroImageForm';
import { MESSAGES } from '../constant/constants';

export const HeroImageCreator = () => {
  const { isOpen, openModal, closeModal } = useModal();
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
        type='primary'
        variant='solid'
        className='mb-4'
        onClick={openModal}
      >
        {MESSAGES.button.uploadImage}
      </Button>
    </>
  );
};
