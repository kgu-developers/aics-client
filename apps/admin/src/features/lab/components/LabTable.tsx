import { Form, Spin, message } from 'antd'
import { Suspense } from 'react'

import useEditTable from '~/hooks/useEditTable'
import LabTableView from './LabTableView'

import {
  useDeleteLab,
  useLabs,
  useUpdateLab,
  useUploadLabImage,
} from '../hooks'

import type { LabDetailResponse } from '~/apis/community/requests'

export const LabTable = () => {
  const [form] = Form.useForm()
  const { data } = useLabs()
  const LabList: LabDetailResponse[] = data?.contents ?? []
  const { register } = useEditTable<LabDetailResponse>(form)
  const [messageApi, contextHolder] = message.useMessage()
  const { uploadLabImage } = useUploadLabImage({ open: messageApi.open })
  const { updateLab } = useUpdateLab({ register, open: messageApi.open })
  const { deleteLab } = useDeleteLab({ open: messageApi.open })

  const handleImageUpload = (record: LabDetailResponse) => (file: File) => {
    uploadLabImage(
      { formData: { file } },
      {
        onSuccess: (res) => {
          if (res?.id) {
            updateLab({
              id: record.id,
              requestBody: {
                name: record.name,
                loc: record.loc,
                site: record.site,
                advisor: record.advisor,
                fileId: res.id,
              },
            })
          }
        },
      },
    )
    return false
  }

  const handleSave = async (record: LabDetailResponse) => {
    try {
      const rowData = await form.validateFields()
      updateLab({
        id: record.id,
        requestBody: { ...rowData, fileId: record.img?.id },
      })
    } catch (error) {
      console.error('Validation Failed:', error)
    }
  }

  const handleDelete = (record: LabDetailResponse) => {
    deleteLab({ id: record.id }, {})
  }

  return (
    <Suspense fallback={<Spin />}>
      {contextHolder}
      <LabTableView
        form={form}
        data={LabList}
        register={register}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleImageUpload={handleImageUpload}
      />
    </Suspense>
  )
}
