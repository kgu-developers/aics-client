import { Button, Form, Input, Modal, Upload, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import { UploadIcon } from 'lucide-react';

import {
  useCarouselServicePostApiV1Carousels,
  useFileServicePostApiV1FilesCarousel,
} from '~/apis/admin/queries';
import type { CarouselRequest } from '~/apis/admin/requests';
import { useCarouselServiceGetApiV1CarouselsKey } from '~/apis/community/queries';

import { useModal } from '~/hooks/use-modal';
import { queryClient } from '~/utils/get-query-client';

function CraeteImageForm({ onClose }: { onClose: () => void }) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate: uploadImage } = useFileServicePostApiV1FilesCarousel();
  const { mutate: saveImage } = useCarouselServicePostApiV1Carousels();

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [useCarouselServiceGetApiV1CarouselsKey],
    });
    await messageApi.open({
      type: 'success',
      content: '이미지가 성공적으로 추가되었습니다.',
      duration: 0.8,
    });
    onClose();
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '이미지 업로드에 실패했습니다.',
    });
    form.resetFields();
    onClose();
  };

  const handleSubmit = (values: CarouselRequest) => {
    const file = form.getFieldValue('file')?.[0]?.originFileObj;
    uploadImage(
      { formData: { file } },
      {
        onSuccess: (res) => {
          if (res?.id) {
            saveImage(
              {
                fileId: res.id,
                requestBody: values,
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
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          text: '',
          link: '',
        }}
        className="flex flex-col gap-4"
      >
        <Form.Item
          label="추가할 이미지"
          name="file"
          valuePropName="fileList"
          getValueFromEvent={(e: UploadChangeParam) =>
            Array.isArray(e) ? e : e?.fileList
          }
          rules={[{ required: true, message: '추가할 사진을 업로드하세요.' }]}
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
        <Form.Item label="설명" name="text">
          <Input
            type="text"
            placeholder="사진의 설명이 필요하시다면 입력해주세요."
          />
        </Form.Item>
        <Form.Item label="링크" name="link">
          <Input type="text" placeholder="연결할 링크가 있다면 입력해주세요." />
        </Form.Item>
        <Button htmlType="submit" color="primary" variant="solid">
          저장하기
        </Button>
      </Form>
    </>
  );
}

function HeroImageCreator() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="이미지 추가하기"
        width={500}
        footer={null}
      >
        <CraeteImageForm onClose={closeModal} />
      </Modal>
      <Button
        type="primary"
        variant="solid"
        className="mb-4"
        onClick={openModal}
      >
        이미지 추가하기
      </Button>
    </>
  );
}

export { HeroImageCreator };
