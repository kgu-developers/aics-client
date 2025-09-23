import { Button, Form, Input, Upload, message } from 'antd'
import type { UploadChangeParam } from 'antd/es/upload'
import { UploadIcon } from 'lucide-react'

import { extractFileName } from '~/shared/utils/utils'
import { LABELS, MESSAGES, PLACEHOLDERS } from '../constant/constants'
import {
  useCreateHeroImage,
  useUpdateHeroImage,
  useUploadHeroImage,
} from '../hooks'

import type {
  CarouselRequest,
  CarouselUpdateRequest,
} from '~/apis/admin/requests'
import type { CarouselResponse } from '~/apis/community/requests'

interface ImageFormProps {
  onClose: () => void
  image?: CarouselResponse
}

export const HeroImageForm = ({ onClose, image }: ImageFormProps) => {
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()
  const { uploadHeroImage } = useUploadHeroImage()
  const { createHeroImage } = useCreateHeroImage({
    onClose,
    resetFields: form.resetFields,
    open: messageApi.open,
  })
  const { updateHeroImage } = useUpdateHeroImage({
    onClose,
    resetFields: form.resetFields,
    open: messageApi.open,
  })

  const isEdit = !!image

  const handleSubmit = async (
    values: CarouselRequest | CarouselUpdateRequest,
  ) => {
    const fileList = form.getFieldValue('file')
    let fileId: number | undefined

    if (fileList && fileList.length > 0) {
      const originFileObj = fileList[0]?.originFileObj
      if (originFileObj instanceof File) {
        const uploadRes = await uploadHeroImage({
          formData: { file: originFileObj },
        })
        fileId = uploadRes.id
      } else if (isEdit) {
        fileId = image?.file?.id
      }
    }

    if (isEdit) {
      updateHeroImage({
        id: image?.id,
        requestBody: { ...(values as CarouselUpdateRequest), fileId },
      })
    } else {
      if (fileId) {
        createHeroImage({ fileId, requestBody: values as CarouselRequest })
      }
    }
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={
          isEdit
            ? {
                file: [
                  {
                    uid: image?.id,
                    name: extractFileName(image?.file?.physicalPath ?? ''),
                    url: image?.file?.physicalPath,
                  },
                ],
                text: image?.text ?? '',
                link: image?.link ?? '',
              }
            : { text: '', link: '' }
        }
        className="flex flex-col gap-4"
      >
        <Form.Item
          label={LABELS.image}
          name="file"
          valuePropName="fileList"
          getValueFromEvent={(e: UploadChangeParam) =>
            Array.isArray(e) ? e : e?.fileList
          }
          rules={[
            { required: true, message: MESSAGES.validation.requiredImage },
          ]}
        >
          <Upload beforeUpload={() => false} maxCount={1} listType="picture">
            <Button className="flex items-center">
              <UploadIcon size={'1rem'} />
              {MESSAGES.button.uploadImage}
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item label={LABELS.description} name="text">
          <Input type="text" placeholder={PLACEHOLDERS.upload.description} />
        </Form.Item>

        <Form.Item label={LABELS.link} name="link">
          <Input type="text" placeholder={PLACEHOLDERS.upload.link} />
        </Form.Item>

        <Button htmlType="submit" color="primary" variant="solid">
          {MESSAGES.button.submit}
        </Button>
      </Form>
    </>
  )
}
