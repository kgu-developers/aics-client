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
  FALSE,
  FORM,
  LABELS,
  MESSAGES,
  PLACEHOLDERS,
  RADIO,
  STATUS,
  TRUE,
  UNNAMED_FILE,
} from '~/shared/constants/post.constants'
import { useCreatePost, useFileUpload, usePatchPost } from '~/shared/hooks'
import { useModal } from '~/shared/hooks/useModal'

import type { PostUpdateRequest } from '~/apis/admin/requests'
import type { PostDetailResponse } from '~/apis/community/requests'

interface PostFormProps {
  post?: PostDetailResponse
  onCancel?: () => void
}

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

function BottomButtons({
  onCancel,
  isEdit,
}: { onCancel: () => void; isEdit: boolean }) {
  const { isOpen, openModal, closeModal } = useModal()
  const router = useRouter()

  const modalTitle = isEdit
    ? MESSAGES.title.deletePost
    : MESSAGES.title.cancelDeletePost
  const modalContent = isEdit
    ? MESSAGES.confirm.deletePost
    : MESSAGES.confirm.cancelPost
  const backHandler = () => {
    if (onCancel) onCancel()
    router.history.back()
  }

  return (
    <div className="flex items-center self-end gap-3">
      <Modal
        open={isOpen}
        onCancel={closeModal}
        title={modalTitle}
        footer={
          <>
            <Button color="primary" variant="solid" onClick={backHandler}>
              {MESSAGES.button.cancel}
            </Button>
            <Button color="default" variant="outlined" onClick={closeModal}>
              {MESSAGES.button.continueCreate}
            </Button>
          </>
        }
        width={500}
      >
        {modalContent}
      </Modal>
      <Button
        color="default"
        variant="outlined"
        size="large"
        onClick={openModal}
      >
        {MESSAGES.button.cancel}
      </Button>
      <Button htmlType="submit" color="primary" variant="solid" size="large">
        {MESSAGES.button.save}
      </Button>
    </div>
  )
}

export function PostForm({ post, onCancel }: PostFormProps) {
  const [messageApi, contextHolder] = message.useMessage()
  const isEdit = !!post
  const router = useRouter()
  const [form] = Form.useForm()

  const { uploadFile } = useFileUpload({ messageApi })
  const { createPost } = useCreatePost({
    messageApi,
    historyBack: () => router.history.back(),
    onCancel: onCancel || (() => {}),
  })
  const { patchPost } = usePatchPost({
    messageApi,
    historyBack: () => router.history.back(),
    onCancel: onCancel || (() => {}),
  })

  const initialValues = post
    ? {
        title: post.title,
        category: post.category,
        isPinned: post.isPinned || false,
        file: post.file
          ? [
              {
                uid: post.file.id.toString(),
                name: post.file.physicalPath.split('/').pop() || UNNAMED_FILE,
                status: STATUS.DONE,
                url: post.file.physicalPath,
                originFileObj: post.file,
              },
            ]
          : [],
        content: post.content,
      }
    : {
        title: '',
        category: undefined,
        isPinned: false,
        file: [],
        content: '',
      }

  const handleFileUpload = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (values: PostUpdateRequest) => {
    const fileList = form.getFieldValue('file')
    let fileId: number | undefined = undefined

    if (fileList && fileList.length > 0) {
      const originFileObj = fileList[0]?.originFileObj

      if (originFileObj instanceof File) {
        fileId = await uploadFile({ formData: { file: originFileObj } }).then(
          (res) => res.id,
        )
      } else if (isEdit && post.file && post?.file?.id === originFileObj?.id) {
        fileId = post.file.id
      }
    }

    if (isEdit) {
      patchPost({
        postId: post?.postId,
        requestBody: {
          title: values.title,
          category: values.category,
          isPinned: values.isPinned ? TRUE : FALSE,
          fileId,
          content: values.content,
        },
      })
    } else {
      createPost({
        fileId,
        requestBody: {
          title: values.title,
          category: values.category,
          isPinned: values.isPinned ? TRUE : FALSE,
          content: values.content,
        },
      })
    }
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
        className="flex flex-col gap-5"
      >
        <FormItemWrapper label={LABELS.title}>
          <Form.Item
            name={FORM.title.name}
            rules={[
              { required: true, message: MESSAGES.validation.requiredTitle },
            ]}
          >
            <Input placeholder={PLACEHOLDERS.title} size="large" />
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label={LABELS.category}>
          <Form.Item
            name={FORM.category.name}
            rules={[
              { required: true, message: MESSAGES.validation.requiredCategory },
            ]}
          >
            <Radio.Group>
              <Radio value={RADIO.notification.value}>
                {RADIO.notification.label}
              </Radio>
              <Radio value={RADIO.news.value}>{RADIO.news.label}</Radio>
            </Radio.Group>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label={LABELS.isPinned}>
          <Form.Item
            name={FORM.isPinned.name}
            valuePropName={FORM.isPinned.valuePropName}
          >
            <Checkbox>{MESSAGES.checkbox.pinPost}</Checkbox>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label={LABELS.file}>
          <Form.Item
            name={FORM.file.name}
            valuePropName={FORM.file.valuePropName}
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
                {MESSAGES.button.uploadFile}
              </Button>
            </Upload>
          </Form.Item>
        </FormItemWrapper>

        <FormItemWrapper label={LABELS.content}>
          <Form.Item
            name={FORM.content.name}
            rules={[
              { required: true, message: MESSAGES.validation.requiredContent },
            ]}
          >
            <Editor
              editorContent={post ? post.content : ''}
              onChange={(value) => form.setFieldsValue({ content: value })}
            />
          </Form.Item>
        </FormItemWrapper>

        <BottomButtons onCancel={onCancel || (() => {})} isEdit={isEdit} />
      </Form>
    </>
  )
}
