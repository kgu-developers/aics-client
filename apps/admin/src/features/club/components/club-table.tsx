import { Form } from 'antd'
import type { ClubDetailResponse } from '~/apis/community/requests'
import ClubCreate from '~/features/club/components/club-creator'
import useEditTable from '~/hooks/use-edit-table'
import ClubTableView from './club-table-view'

import {
  useClubs,
  useClubImageUpload,
  useUpdateClub,
  useDeleteClub,
} from '~/features/club/hooks'

function ClubTable() {
  const [form] = Form.useForm()
  const { register } = useEditTable<ClubDetailResponse>(form)

  const { clubs } = useClubs()
  const updateMutation = useUpdateClub()
  const deleteMutation = useDeleteClub()
  const { uploadAndGetFileId } = useClubImageUpload()

  const dataSource: ClubDetailResponse[] = clubs

  const handleImageUpload = (record: ClubDetailResponse) => async (file: File) => {
    const fileId = await uploadAndGetFileId(file)
    if (!fileId) return false
    await updateMutation.mutateAsync({
      id: record.id,
      requestBody: {
        name: record.name,
        description: record.description,
        site: record.site,
        fileId,
      },
    })
    return false // antd Upload 기본 업로드 막기
  }

  const handleSave = async (record: ClubDetailResponse) => {
    const rowData = await form.validateFields()
    await updateMutation.mutateAsync({
      id: record.id,
      requestBody: { ...rowData, fileId: record.file?.id },
    })
    register.cancel()
  }

  const handleDelete = async (record: ClubDetailResponse) => {
    await deleteMutation.mutateAsync({ id: record.id })
  }

  return (
    <>
      <ClubCreate />
      <ClubTableView
        form={form}
        data={dataSource}
        register={register}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleImageUpload={handleImageUpload}
      />
    </>
  )
}

export default ClubTable
