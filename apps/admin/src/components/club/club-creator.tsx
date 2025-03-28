import { useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Modal, message } from 'antd';
import { useState } from 'react';
import { useClubServicePostApiV1Clubs } from '~/apis/admin/queries';

const ClubCreate: React.FC = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const createMutation = useClubServicePostApiV1Clubs({
    onSuccess: () => {
      message.success('동아리 추가 완료');
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ['ClubServiceGetApiV1Clubs'] });
    },
    onError: () => message.error('동아리 추가 실패'),
  });

  const handleCreate = async () => {
    const values = await form.validateFields();
    createMutation.mutate({ requestBody: values });
  };

  return (
    <>
      <Button type="primary" className="mb-3" onClick={() => setOpen(true)}>
        동아리 추가
      </Button>
      <Modal
        title="동아리 추가"
        open={open}
        onOk={handleCreate}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="동아리명"
            rules={[{ required: true, message: '동아리명을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="소개"
            rules={[{ required: true, message: '소개를 입력해주세요' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="site" label="웹사이트">
            <Input placeholder="https://example.com" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ClubCreate;
