import { useRouter } from '@tanstack/react-router'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Radio,
  Upload,
  message,
} from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { UploadIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Editor } from '@aics-client/tiptap'

import {
  useFileServicePostApiV1FilesPost,
  usePostServicePostApiV1Posts,
} from '~/apis/admin/queries'
import type { PostUpdateRequest } from '~/apis/admin/requests'

import { useModal } from '~/hooks/use-modal'

import { usePostServiceGetApiV1PostsKey } from '~/apis/community/queries'
import { queryClient } from '~/utils/get-query-client'

function FormItemWrapper({
  label,
  children,
}: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-semibold">{label}</span>
      {children}
    </div>
  )
}

function BottomButtons() {
  const { isOpen, openModal, closeModal } = useModal()
  const router = useRouter()

  return (
    <div className="flex items-center self-end gap-3">
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title="게시글 작성 취소"
        footer={
          <>
            <Button
              color="primary"
              variant="solid"
              onClick={() => router.history.back()}
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
        게시글 작성을 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.
      </Modal>
      <Button
        color="default"
        variant="outlined"
        size="large"
        onClick={openModal}
      >
        취소하기
      </Button>
      <Button htmlType="submit" color="primary" variant="solid" size="large">
        저장하기
      </Button>
    </div>
  )
}

function WriteNewPostField() {
  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()
  const fileUploadMutation = useFileServicePostApiV1FilesPost()
  const postsMutation = usePostServicePostApiV1Posts()

  const handleFileUpload = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
  }

  const handleSuccess = async () => {
    queryClient.invalidateQueries({
      queryKey: [usePostServiceGetApiV1PostsKey],
    })
    await messageApi.open({
      type: 'success',
      content: '게시글이 성공적으로 등록되었습니다.',
      duration: 0.7,
    })
    router.history.back()
  }

  const handleError = () => {
    messageApi.open({
      type: 'error',
      content: '게시글 등록에 실패했습니다.',
    })
  }

  const handleSubmit = async (values: PostUpdateRequest) => {
    try {
      const fileList = form.getFieldValue('file')

      let fileId: number | undefined = undefined

      if (fileList && fileList.length > 0) {
        const originFileObj = fileList[0]?.originFileObj

        if (originFileObj instanceof File) {
          const uploadRes = await fileUploadMutation.mutateAsync({
            formData: { file: originFileObj },
          })
          fileId = uploadRes.id
        } else if (originFileObj?.id) {
          fileId = originFileObj.id
        }
      }

      postsMutation.mutate(
        {
          fileId: fileId,
          requestBody: {
            title: values.title,
            category: values.category,
            isPinned: values.isPinned ? 'TRUE' : 'FALSE',
            content: values.content,
          },
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
    } catch (_error) {
      handleError()
    }
  }

  return (
    <>
      {contextHolder}
      <Form form={form} onFinish={handleSubmit} className="flex flex-col gap-5">
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
                handleFileUpload(file)
                return false
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
              editorContent={''}
              onChange={(value) => form.setFieldsValue({ content: value })}
            />
          </Form.Item>
        </FormItemWrapper>

        <BottomButtons />
      </Form>
    </>
  )
}

export { WriteNewPostField }
