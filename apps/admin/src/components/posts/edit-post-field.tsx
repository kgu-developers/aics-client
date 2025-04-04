import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Radio,
  Upload,
  message,
} from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import { UploadIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { Editor } from '@aics-client/tiptap';

import {
  useFileServicePostApiV1FilesPost,
  usePostServicePatchApiV1PostsByPostId,
} from '~/apis/admin/queries';
import type { PostUpdateRequest } from '~/apis/admin/requests';
import type { PostDetailResponse } from '~/apis/community/requests';

import useModal from '~/hooks/use-modal';

import { convertCategory, extractFileName } from '~/utils/utils';

function FormItemWrapper({
  label,
  children,
}: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-semibold">{label}</span>
      {children}
    </div>
  );
}

function BottomButtons() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex items-center self-end gap-3">
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="게시글 삭제"
        footer={
          <>
            <Button
              color="primary"
              variant="solid"
              onClick={() => window.history.back()}
            >
              돌아가기
            </Button>
            <Button color="default" variant="outlined" onClick={closeModal}>
              계속 작성하기
            </Button>
          </>
        }
        width={500}
      >
        정말 삭제하시겠습니까?
      </Modal>
      <Button
        color="default"
        variant="outlined"
        size="large"
        onClick={openModal}
        className="self-end"
      >
        취소하기
      </Button>
      <Button color="primary" variant="solid" size="large" className="self-end">
        저장하기
      </Button>
    </div>
  );
}

function EditPostField({ post }: { post?: PostDetailResponse }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const fileUploadMutation = useFileServicePostApiV1FilesPost();
  const patchPostsMutation = usePostServicePatchApiV1PostsByPostId();
  const initialValues = post
    ? {
        title: post.title,
        category: convertCategory(post.category),
        isPinned: post.isPinned || false,
        file: post.file
          ? [
              {
                uid: post.file.id.toString(),
                name: extractFileName(post.file.physicalPath) || 'Unnamed File',
                status: 'done',
                url: post.file.physicalPath,
                originFileObj: post.file,
              },
            ]
          : [],
        fileId: post.file ? post.file.id : null,
        content: post.content,
      }
    : {};

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  };

  const handleSuccess = () => {
    messageApi.open({
      type: 'success',
      content: '게시글이 성공적으로 수정되었습니다.',
    });

    setTimeout(() => {
      window.history.back();
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }, 700);
  };

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '게시글 수정에 실패했습니다.',
    });
  };

  const handleSubmit = async (values: PostUpdateRequest) => {
    try {
      const fileList = form.getFieldValue('file');

      let fileId: number | undefined = undefined;

      if (fileList && fileList.length > 0) {
        const originFileObj = fileList[0]?.originFileObj;

        if (originFileObj instanceof File) {
          const uploadRes = await fileUploadMutation.mutateAsync({
            formData: { file: originFileObj },
          });
          fileId = uploadRes.id;
        } else if (post?.file?.id === originFileObj?.id) {
          fileId = post?.file?.id;
        }
      }

      patchPostsMutation.mutate(
        {
          postId: post?.postId || 0,
          requestBody: {
            title: values.title,
            category: values.category,
            isPinned: values.isPinned,
            fileId,
            content: values.content,
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
        initialValues={initialValues}
        onValuesChange={(value) => {
          console.log(value);
        }}
        onFinish={handleSubmit}
        className="flex flex-col gap-5"
      >
        <FormItemWrapper label="제목">
          <Form.Item
            name="title"
            rules={[{ required: true, message: '제목을 입력하세요' }]}
          >
            <Input placeholder="제목을 입력하세요" size="large" />
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label="카테고리">
          <Form.Item
            name="category"
            rules={[{ required: true, message: '카테고리를 선택하세요' }]}
          >
            <Radio.Group>
              <Radio value="NOTIFICATION">공지사항</Radio>
              <Radio value="NEWS">학부소식</Radio>
            </Radio.Group>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label="게시글 고정">
          <Form.Item name="isPinned" valuePropName="checked">
            <Checkbox>게시글 고정하기</Checkbox>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label="첨부파일">
          <Form.Item
            name="file"
            valuePropName="fileList"
            getValueFromEvent={(e: UploadChangeParam) =>
              Array.isArray(e) ? e : e?.fileList
            }
          >
            <Upload
              beforeUpload={(file) => {
                handleFileUpload(file);
                return false;
              }}
              maxCount={1}
            >
              <Button className="flex items-center">
                <UploadIcon size={'1rem'} />
                파일 업로드
              </Button>
            </Upload>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label="본문">
          <Form.Item name="content">
            <Editor
              editorContent={post ? post.content : ''}
              onChange={(value) => form.setFieldsValue({ content: value })}
            />
          </Form.Item>
        </FormItemWrapper>

        <BottomButtons />
      </Form>
    </>
  );
}

export { EditPostField };
