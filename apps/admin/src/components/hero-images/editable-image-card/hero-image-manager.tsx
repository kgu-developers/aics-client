import { Button, Form, Input, Modal, Upload, message } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import { PencilIcon, Trash2Icon, UploadIcon } from 'lucide-react';

import {
  useCarouselServiceDeleteApiV1CarouselsById,
  useCarouselServicePatchApiV1CarouselsById,
  useFileServicePostApiV1FilesCarousel,
} from '~/apis/admin/queries';
import type { CarouselUpdateRequest } from '~/apis/admin/requests';
import { useCarouselServiceGetApiV1CarouselsKey } from '~/apis/community/queries';

import type { CarouselResponse } from '~/apis/community/requests';
import { useModal } from '~/hooks/use-modal';

import { queryClient } from '~/utils/get-query-client';
import { extractFileName } from '~/utils/utils';

interface CraeteImageFormProps {
  onClose: () => void;
  image: CarouselResponse;
}

function EditImageForm({ onClose, image }: CraeteImageFormProps) {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync: uploadImage } = useFileServicePostApiV1FilesCarousel();
  const { mutate: saveImage } = useCarouselServicePatchApiV1CarouselsById();

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [useCarouselServiceGetApiV1CarouselsKey],
    });
    await messageApi.open({
      type: 'success',
      content: '이미지가 성공적으로 수정되었습니다.',
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
      content: '이미지 수정에 실패했습니다.',
    });
    form.resetFields();
    onClose();
  };

  const handleSubmit = async (values: CarouselUpdateRequest) => {
    try {
      const fileList = form.getFieldValue('file');

      let fileId: number | undefined = undefined;

      if (fileList && fileList.length > 0) {
        const originFileObj = fileList[0]?.originFileObj;

        if (originFileObj instanceof File) {
          const uploadRes = await uploadImage({
            formData: { file: originFileObj },
          });
          fileId = uploadRes.id;
        } else if (values?.fileId === originFileObj?.id) {
          fileId = image?.file?.id;
        }
      }

      saveImage(
        {
          id: image.id,
          requestBody: {
            text: values.text,
            link: values.link,
            fileId,
          },
        },
        {
          onSuccess: () => {
            handleSuccess();
          },
          onError: () => {
            handleError();
          },
        },
      );
    } catch (_error) {
      handleError();
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          file: [
            {
              uid: image.id,
              name: extractFileName(image.file?.physicalPath ?? ''),
              url: image.file?.physicalPath,
            },
          ],
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

function EditHeroImageButton({ image }: { image: CarouselResponse }) {
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
        <EditImageForm onClose={closeModal} image={image} />
      </Modal>
      <Button
        icon={<PencilIcon size={'1rem'} />}
        color="primary"
        variant="solid"
        onClick={openModal}
      >
        수정
      </Button>
    </>
  );
}

function DeleteHeroImageButton({
  id,
}: {
  id: number;
}) {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutate: deleteImage } = useCarouselServiceDeleteApiV1CarouselsById();

  const handleSuccess = async () => {
    await messageApi.open({
      type: 'success',
      content: '이미지가 성공적으로 삭제되었습니다.',
      duration: 0.7,
    });
    queryClient.invalidateQueries({
      queryKey: [useCarouselServiceGetApiV1CarouselsKey],
    });
  };

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '이미지 삭제에 실패했습니다.',
    });
  };

  const handleDeleteImage = () => {
    deleteImage(
      { id },
      {
        onSuccess: () => {
          handleSuccess();
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
      <Button
        icon={<Trash2Icon size={'1rem'} />}
        color="danger"
        variant="solid"
        onClick={handleDeleteImage}
      >
        삭제
      </Button>
    </>
  );
}

export { EditHeroImageButton, DeleteHeroImageButton };
