import { Button, Form, Input, Modal, Select, message } from 'antd'

import { useProfessorServicePostApiV1Professors } from '~/apis/admin/queries'
import type { ProfessorRequest } from '~/apis/admin/requests'
import { useProfessorServiceGetApiV1ProfessorsKey } from '~/apis/community/queries'

import { useModal } from '~/hooks/useModal'
import { queryClient } from '~/shared/utils'

function CreateProfessorForm({ onClose }: { onClose: () => void }) {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const postProfessorMutation = useProfessorServicePostApiV1Professors()

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [useProfessorServiceGetApiV1ProfessorsKey],
    })
    await messageApi.open({
      type: 'success',
      content: '교수진 정보가 성공적으로 추가 되었습니다.',
      duration: 0.8,
    })
    form.resetFields()
    onClose()
  }

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '교수진 정보 추가에 실패했습니다.',
    })
  }

  const handleSubmit = (values: ProfessorRequest) => {
    postProfessorMutation.mutate(
      {
        requestBody: values,
      },
      {
        onSuccess: () => {
          handleSuccess()
        },
        onError: () => {
          handleError()
        },
      },
    )
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="flex flex-col"
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
            message: '직급을 선택하세요.',
          },
        ]}
      >
        <Select
          placeholder="교수님의 직급을 선택하세요."
          options={[
            { label: '교수', value: '교수' },
            { label: '조교수', value: '조교수' },
          ]}
          className="w-full"
          defaultValue={'교수'}
        />
      </Form.Item>
      <Form.Item
        label="연락처"
        name="contact"
        rules={[{ required: true, message: '연락처를 입력하세요.' }]}
        extra={'연락처는 010-0000-0000 형식으로 입력해주세요.'}
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
            message: '@kyonggi.ac.kr 형식의 경기대 메일만 입력 가능합니다.',
          },
        ]}
      >
        <Input type="text" placeholder="이메일을 입력하세요." />
      </Form.Item>

      <Form.Item
        label="사무실 위치"
        name="officeLoc"
        rules={[{ required: true, message: '사무실의 위치를 입력하세요.' }]}
      >
        <Input type="text" placeholder="사무실의 위치를 입력하세요." />
      </Form.Item>
      <Form.Item
        label="프로필 이미지 주소"
        name="img"
        rules={[
          { required: true, message: '이미지 주소(쿠티스)를 입력하세요.' },
        ]}
        extra={'이미지 주소는 쿠티스에서 복사한 주소를 붙여넣기 해주세요.'}
      >
        <Input type="text" placeholder="이미지 주소(쿠티스)를 입력하세요." />
      </Form.Item>
      <Button htmlType="submit" color="primary" variant="solid">
        추가하기
      </Button>
    </Form>
  )
}

function ProfessorCreator() {
  const { isOpen, openModal, closeModal } = useModal()

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
  )
}

export { ProfessorCreator }
