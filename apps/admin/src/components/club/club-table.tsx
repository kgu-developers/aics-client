import { useQueryClient } from '@tanstack/react-query'
import { Form, message } from 'antd'
import {
  useClubServiceDeleteApiV1ClubsById,
  useClubServicePatchApiV1ClubsById,
  useFileServicePostApiV1FilesClub,
} from '~/apis/admin/queries'
import { useClubServiceGetApiV1Clubs } from '~/apis/community/queries'
import type { ClubDetailResponse } from '~/apis/community/requests'
import ClubCreate from '~/components/club/club-creator'
import useEditTable from '~/hooks/use-edit-table'

import ClubTableView from './club-table-view'

function ClubTable() {
  const [form] = Form.useForm()
  const { register } = useEditTable<ClubDetailResponse>(form)
  const { data } = useClubServiceGetApiV1Clubs()

  const queryClient = useQueryClient()
  const updateMutation = useClubServicePatchApiV1ClubsById()
  const deleteMutation = useClubServiceDeleteApiV1ClubsById()
  const [messageApi, contextHolder] = message.useMessage()

  const dataSource: ClubDetailResponse[] = data?.contents ?? []

  const uploadClubImage = useFileServicePostApiV1FilesClub()

  const handleImageUpload = (record: ClubDetailResponse) => (file: File) => {
    uploadClubImage.mutate(
      { formData: { file } },
      {
        onSuccess: (res) => {
          if (res?.id) {
            updateMutation.mutate(
              {
                id: record.id,
                requestBody: {
                  name: record.name,
                  description: record.description,
                  site: record.site,
                  fileId: res.id,
                },
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: ['ClubServiceGetApiV1Clubs'],
                  })
                },
              },
            )
          }
        },
      },
    )
    return false
  }

  const handleSave = async (record: ClubDetailResponse) => {
    try {
      const rowData = await form.validateFields()
      const updatedData = {
        ...rowData,
        fileId: record.file?.id,
      }

      updateMutation.mutate(
        { id: record.id, requestBody: updatedData },
        {
          onSuccess: () => {
            register.cancel()
            messageApi.open({
              type: 'success',
              content: '동아리 정보가 성공적으로 수정되었습니다.',
            })
            queryClient.invalidateQueries({
              queryKey: ['ClubServiceGetApiV1Clubs'],
            })
          },
          onError: (e) => {
            console.error('수정 실패:', e)
            messageApi.open({
              type: 'error',
              content: '동아리 수정에 실패했습니다.',
            })
          },
        },
      )
    } catch (error) {
      console.error('Validation Failed:', error)
    }
  }

  const handleDelete = (record: ClubDetailResponse) => {
    deleteMutation.mutate(
      { id: record.id },
      {
        onSuccess: () => {
          messageApi.open({
            type: 'success',
            content: '동아리가 성공적으로 삭제되었습니다.',
          })
          queryClient.invalidateQueries({
            queryKey: ['ClubServiceGetApiV1Clubs'],
          })
        },
        onError: (e) => {
          console.error('삭제 실패:', e)
          messageApi.open({
            type: 'error',
            content: '동아리 삭제에 실패했습니다.',
          })
        },
      },
    )
  }

  return (
    <>
      {contextHolder}
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
