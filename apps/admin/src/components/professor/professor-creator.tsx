import { Button, Form, Input, Modal, message } from 'antd';

import { useProfessorServicePostApiV1Professors } from '~/apis/admin/queries';
import type { ProfessorRequest } from '~/apis/admin/requests';
import { useProfessorServiceGetApiV1ProfessorsKey } from '~/apis/community/queries';

import { queryClient } from '~/utils/get-query-client';
import useModal from '~/hooks/use-modal';

function CreateProfessorForm({ onClose }: { onClose: () => void }) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const postProfessorMutation = useProfessorServicePostApiV1Professors();

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [useProfessorServiceGetApiV1ProfessorsKey],
    });
    await messageApi.open({
      type: 'success',
      content: '연구실이 성공적으로 추가가되었습니다.',
      duration: 0.8,
    });
    onClose();
  };

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '연구실 추가에 실패했습니다.',
    });
  };

  const handleSubmit = (values: ProfessorRequest) => {
    postProfessorMutation.mutate(
      {
        requestBody: {
          name: values.name,
          role: values.role,
          contact: values.contact,
          email: values.email,
          img: values.img,
          officeLoc: values.officeLoc,
        },
      },
      {
        onSuccess: () => {
          handleSuccess();
          form.resetFields();
        },
        onError: () => {
          handleError();
        },
      },
    );
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="flex flex-col gap-4"
    >
      {contextHolder}
      <Form.Item
        label="이름"
        name="name"
        rules={[{ required: true, message: '교수님의 성함을 입력하세요.' }]}
      >
        <Input type="text" placeholder="교수님의 성함을 입력하세요." />
      </Form.Item>
      <Form.Item
        label="직급"
        name="role"
        rules={[
          {
            required: true,
            message: '교수님의 직급울 입력하세요.',
          },
        ]}
      >
        <Input
          type="text"
          placeholder="교수님의 직급(예: 교수, 조교수)울 입력하세요."
        />
      </Form.Item>
      <Form.Item
        label="연락처"
        name="contact"
        rules={[{ required: true, message: '연락처를 입력하세요.' }]}
      >
        <Input type="text" placeholder="연락처를 입력하세요." />
      </Form.Item>
      <Form.Item
        label="이메일"
        name="email"
        rules={[
          { required: true, message: '이메일을 입력하세요.' },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@kyonggi\.ac\.kr$/,
            message: 'kyonggi.ac.kr 도메인의 이메일만 입력 가능합니다.',
          },
        ]}
      >
        <Input type="text" placeholder="이메일을 입력하세요." />
      </Form.Item>
      <Form.Item
        label="프로필 이미지 주소"
        name="img"
        rules={[
          { required: true, message: '이미지 주소(쿠티스)를 입력하세요.' },
        ]}
      >
        <Input type="text" placeholder="이미지 주소(쿠티스)를 입력하세요." />
      </Form.Item>
      <Form.Item
        label="사무실 위치"
        name="officeLoc"
        rules={[{ required: true, message: '사무실의 위치를 입력하세요.' }]}
      >
        <Input type="text" placeholder="사무실의 위치를 입력하세요." />
      </Form.Item>
      <Button htmlType="submit" color="primary" variant="solid">
        추가하기
      </Button>
    </Form>
  );
}

function ProfessorCreator() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="교수 추가하기"
        width={500}
        footer={null}
      >
        <CreateProfessorForm onClose={closeModal} />
      </Modal>
      <Button
        type="primary"
        variant="solid"
        className="mb-4"
        onClick={openModal}
      >
        교수 추가하기
      </Button>
    </>
  );
}

export { ProfessorCreator };
