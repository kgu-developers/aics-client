import { useQueryClient } from '@tanstack/react-query';
import { Form, Spin, message } from 'antd';

import {
  useFileServicePostApiV1FilesLab,
  useLabServiceDeleteApiV1LabsById,
  useLabServicePatchApiV1LabsById,
} from '~/apis/admin/queries';
import {
  useLabServiceGetApiV1Labs,
  useLabServiceGetApiV1LabsKey,
} from '~/apis/community/queries';
import type { LabDetailResponse } from '~/apis/community/requests';

import { Suspense } from 'react';
import useEditTable from '~/hooks/use-edit-table';
import LabTableView from './lab-table-view';

function LabTable() {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const { data } = useLabServiceGetApiV1Labs();
  const LabList: LabDetailResponse[] = data?.contents ?? [];
  const { register } = useEditTable<LabDetailResponse>(form);
  const uploadLabImage = useFileServicePostApiV1FilesLab();
  const updateMutation = useLabServicePatchApiV1LabsById();
  const deleteMutation = useLabServiceDeleteApiV1LabsById();
  const [messageApi, contextHolder] = message.useMessage();

  const handleImageUpload = (record: LabDetailResponse) => (file: File) => {
    uploadLabImage.mutate(
      { formData: { file } },
      {
        onSuccess: (res) => {
          if (res?.id) {
            updateMutation.mutate(
              {
                id: record.id,
                requestBody: {
                  name: record.name,
                  loc: record.loc,
                  site: record.site,
                  advisor: record.advisor,
                  fileId: res.id,
                },
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries({
                    queryKey: [useLabServiceGetApiV1LabsKey],
                  });
                },
              },
            );
          }
        },
      },
    );
    return false;
  };

  const handleSave = async (record: LabDetailResponse) => {
    try {
      const rowData = await form.validateFields();
      updateMutation.mutate(
        { id: record.id, requestBody: rowData },
        {
          onSuccess: () => {
            register.cancel();
            messageApi.open({
              type: 'success',
              content: '연구실 정보가 성공적으로 수정되었습니다.',
            });
            queryClient.invalidateQueries({
              queryKey: ['ClubServiceGetApiV1Clubs'],
            });
          },
          onError: (e) => {
            console.error('수정 실패:', e);
            messageApi.open({
              type: 'error',
              content: '연구실실 수정에 실패했습니다.',
            });
          },
        },
      );
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  const handleDelete = (record: LabDetailResponse) => {
    deleteMutation.mutate(
      { id: record.id },
      {
        onSuccess: () => {
          messageApi.open({
            type: 'success',
            content: '연구실이 성공적으로 삭제되었습니다.',
          });
          queryClient.invalidateQueries({
            queryKey: ['ClubServiceGetApiV1Clubs'],
          });
        },
        onError: (e) => {
          console.error('삭제 실패:', e);
          messageApi.open({
            type: 'error',
            content: '연구실 삭제에 실패했습니다.',
          });
        },
      },
    );
  };

  return (
    <Suspense fallback={<Spin />}>
      {contextHolder}
      {/* 연구실 추가하기 구현 필요 */}
      <LabTableView
        form={form}
        data={LabList}
        register={register}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleImageUpload={handleImageUpload}
      />
    </Suspense>
  );
}

export default LabTable;
