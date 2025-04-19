import { Button, Form, Input, Modal, Upload, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import { UploadIcon } from 'lucide-react';

import {
  useFileServicePostApiV1FilesLab,
  useLabServicePostApiV1Labs,
} from '~/apis/admin/queries';
import type { LabCreateRequest } from '~/apis/admin/requests';
import { useLabServiceGetApiV1LabsKey } from '~/apis/community/queries';
import { useModal } from '~/hooks/use-modal';
import { queryClient } from '~/utils/get-query-client';

function CreateLabForm({ onClose }: { onClose: () => void }) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const postLabMutation = useLabServicePostApiV1Labs();
  const uploadImageMutation = useFileServicePostApiV1FilesLab();

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [useLabServiceGetApiV1LabsKey],
    });
    await messageApi.open({
      type: 'success',
      content: '연구실이 성공적으로 추가되었습니다.',
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

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  const handleSubmit = (values: LabCreateRequest) => {
    const file = form.getFieldValue('file')?.[0]?.originFileObj;
    uploadImageMutation.mutate(
      { formData: { file } },
      {
        onSuccess: (res) => {
          if (res?.id) {
            postLabMutation.mutate(
              {
                fileId: res.id,
                requestBody: {
                  name: values.name,
                  loc: values.loc,
                  site: values.site,
                  advisor: values.advisor,
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
          }
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
        label="연구실 이름"
        name="name"
        rules={[{ required: true, message: '연구실의 이름을 입력하세요.' }]}
      >
        <Input type="text" placeholder="연구실의 이름을 입력하세요." />
      </Form.Item>
      <Form.Item
        label="연구실 이미지"
        name="file"
        valuePropName="fileList"
        getValueFromEvent={(e: UploadChangeParam) =>
          Array.isArray(e) ? e : e?.fileList
        }
        rules={[
          { required: true, message: '연구실의 프로필 사진을 업로드하세요.' },
        ]}
      >
        <Upload
          beforeUpload={(file) => {
            handleFileUpload(file);
            return false;
          }}
          maxCount={1}
          listType="picture"
        >
          <Button className="flex items-center">
            <UploadIcon size={'1rem'} />
            이미지 업로드
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="연구실 위치"
        name="loc"
        rules={[{ required: true, message: '연구실의 위치를 입력하세요.' }]}
      >
        <Input type="text" placeholder="연구실의 위치를 입력하세요." />
      </Form.Item>
      <Form.Item
        label="연구실 홈페이지 (kyonggi.ac.kr 도메인만 가능합니다)"
        name="site"
        rules={[
          { required: true, message: '연구실의 홈페이지 주소를 입력하세요.' },
          {
            pattern: /^https?:\/\/([a-zA-Z0-9-]+\.)*kyonggi\.ac\.kr(\/.*)?$/,
            message: 'kyonggi.ac.kr 도메인만 입력 가능합니다.',
          },
        ]}
      >
        <Input type="text" placeholder="연구실의 홈페이지 주소를 입력하세요." />
      </Form.Item>
      <Form.Item
        label="담당 교수"
        name="advisor"
        rules={[{ required: true, message: '담당 교수를 입력하세요.' }]}
      >
        <Input type="text" placeholder="담당 교수의 이름을 입력하세요." />
      </Form.Item>
      <Button htmlType="submit" color="primary" variant="solid">
        추가하기
      </Button>
    </Form>
  );
}

function LabCreator() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="연구실 추가하기"
        width={500}
        footer={null}
      >
        <CreateLabForm onClose={closeModal} />
      </Modal>
      <Button
        type="primary"
        variant="solid"
        className="mb-4"
        onClick={openModal}
      >
        연구실 추가하기
      </Button>
    </>
  );
}

export { LabCreator };
