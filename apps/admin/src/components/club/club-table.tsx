import { useQueryClient } from '@tanstack/react-query';
import { Form, message } from 'antd';
import {
  useClubServiceDeleteApiV1ClubsById,
  useClubServicePatchApiV1ClubsById,
} from '~/apis/admin/queries';
import { useClubServiceGetApiV1Clubs } from '~/apis/community/queries';
import type { ClubDetailResponse } from '~/apis/community/requests';
import useEditTable from '~/hooks/useEditTable';
import ClubTableView from './club-table-view';

type ClubTableRow = ClubDetailResponse & { key: string };

function ClubTable() {
  const [form] = Form.useForm();
  const { register } = useEditTable<ClubTableRow>(form);
  const { data } = useClubServiceGetApiV1Clubs();

  const queryClient = useQueryClient();
  const updateMutation = useClubServicePatchApiV1ClubsById();
  const deleteMutation = useClubServiceDeleteApiV1ClubsById();
  const [messageApi, contextHolder] = message.useMessage();

  const dataSource: ClubTableRow[] = (data?.contents || []).map((item) => ({
    ...item,
    key: item.id.toString(),
  }));

  const handleSave = async (record: ClubTableRow) => {
    try {
      const rowData = await form.validateFields();
      updateMutation.mutate(
        { id: record.id, requestBody: rowData },
        {
          onSuccess: () => {
            register.cancel();
            messageApi.open({
              type: 'success',
              content: '동아리 정보가 성공적으로 수정되었습니다.',
            });
            queryClient.invalidateQueries({
              queryKey: ['ClubServiceGetApiV1Clubs'],
            });
          },
          onError: (e) => {
            console.error('수정 실패:', e);
            messageApi.open({
              type: 'error',
              content: '동아리 수정에 실패했습니다.',
            });
          },
        },
      );
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  const handleDelete = (record: ClubTableRow) => {
    deleteMutation.mutate(
      { id: record.id },
      {
        onSuccess: () => {
          messageApi.open({
            type: 'success',
            content: '동아리가 성공적으로 삭제되었습니다.',
          });
          queryClient.invalidateQueries({
            queryKey: ['ClubServiceGetApiV1Clubs'],
          });
        },
        onError: (e) => {
          console.error('삭제 실패:', e);
          messageApi.open({
            type: 'error',
            content: '동아리 삭제에 실패했습니다.',
          });
        },
      },
    );
  };

  return (
    <>
      {contextHolder}
      <ClubTableView
        form={form}
        data={dataSource}
        register={register}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default ClubTable;
