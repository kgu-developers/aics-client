import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';

import { useCreateClub } from '~/features/club/hooks';

const ClubCreate: React.FC = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const createMutation = useCreateClub();

  const handleCreate = async () => {
    const values = await form.validateFields();
    await createMutation.mutateAsync({ requestBody: values });
    setOpen(false);
  };

  return (
    <>
      <Button type='primary' className='mb-3' onClick={() => setOpen(true)}>
        동아리 추가
      </Button>
      <Modal
        title='동아리 추가'
        open={open}
        onOk={handleCreate}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} layout='vertical'>
          <Form.Item
            name='name'
            label='동아리명'
            rules={[{ required: true, message: '동아리명을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='description'
            label='소개'
            rules={[{ required: true, message: '소개를 입력해주세요' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name='site' label='웹사이트'>
            <Input placeholder='https://example.com' />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ClubCreate;
