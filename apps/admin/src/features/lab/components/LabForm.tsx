import { Button, Form, Input, Upload, message } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { UploadIcon } from 'lucide-react'

import { LABELS, MESSAGES, PATTERN } from '../constant/constants'
import { useCreateLab, useUploadLabImage } from '../hooks'

import type { LabCreateRequest } from '~/apis/admin/requests'

interface LabFormProps {
  onClose: () => void
}

export const LabForm = ({ onClose }: LabFormProps) => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const { createLab } = useCreateLab({
    onClose,
    resetFields: form.resetFields,
    open: messageApi.open,
  })
  const { uploadLabImage } = useUploadLabImage({ open: messageApi.open })

  const handleSubmit = async (values: LabCreateRequest) => {
    const file = form.getFieldValue('file')?.[0]?.originFileObj
    if (!file) {
      messageApi.open({ type: 'error', content: MESSAGES.error.missingFile })
      return
    }
    const res = await uploadLabImage({ formData: { file } })
    if (res?.id) {
      createLab({
        fileId: res.id,
        requestBody: {
          name: values.name,
          loc: values.loc,
          site: values.site,
          advisor: values.advisor,
        },
      })
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="flex flex-col gap-4"
    >
      {contextHolder}
      <Form.Item
        label={LABELS.name}
        name="name"
        rules={[{ required: true, message: MESSAGES.validation.requiredName }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={LABELS.image}
        name="file"
        valuePropName="fileList"
        getValueFromEvent={(e: UploadChangeParam) =>
          Array.isArray(e) ? e : e?.fileList
        }
        rules={[{ required: true, message: MESSAGES.validation.requiredImage }]}
      >
        <Upload beforeUpload={() => false} maxCount={1} listType="picture">
          <Button className="flex items-center">
            <UploadIcon size={'1rem'} />
            {MESSAGES.button.uploadImage}
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label={LABELS.location}
        name="loc"
        rules={[
          { required: true, message: MESSAGES.validation.requiredLocation },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={LABELS.homepage}
        name="site"
        rules={[
          { required: true, message: MESSAGES.validation.requiredSite },
          {
            pattern: PATTERN.site,
            message: MESSAGES.error.invalidDomain,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={LABELS.advisor}
        name="advisor"
        rules={[
          { required: true, message: MESSAGES.validation.requiredAdvisor },
        ]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" color="primary" variant="solid">
        {MESSAGES.button.submit}
      </Button>
    </Form>
  )
}
