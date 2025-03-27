import { useQueryClient } from '@tanstack/react-query';
import { Form, Spin, message } from 'antd';
import { Suspense } from 'react';

import {
  useProfessorServiceDeleteApiV1ProfessorsById,
  useProfessorServicePatchApiV1ProfessorsById,
} from '~/apis/admin/queries';
import {
  useProfessorServiceGetApiV1Professors,
  useProfessorServiceGetApiV1ProfessorsKey,
} from '~/apis/community/queries';
import type { ProfessorResponse } from '~/apis/community/requests';
import useEditTable from '~/hooks/use-edit-table';
import ProfessorTableView from './professor-table-view';

function ProfessorTable() {
  const [form] = Form.useForm();
  const { data } = useProfessorServiceGetApiV1Professors();
  const professorList: ProfessorResponse[] = data?.contents ?? [];
  const queryClient = useQueryClient();
  const updateMutation = useProfessorServicePatchApiV1ProfessorsById();
  const deleteMutation = useProfessorServiceDeleteApiV1ProfessorsById();
  const { register } = useEditTable<ProfessorResponse>(form);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSave = async (record: ProfessorResponse) => {
    try {
      const rowData = await form.validateFields();
      updateMutation.mutate(
        { id: record.id, requestBody: rowData },
        {
          onSuccess: () => {
            register.cancel();
            messageApi.open({
              type: 'success',
              content: '교수 정보가 성공적으로 수정되었습니다.',
            });
            queryClient.invalidateQueries({
              queryKey: ['ProfessorServiceGetApiV1Professors'],
            });
          },
          onError: (e) => {
            console.error('수정 실패:', e);
            messageApi.open({
              type: 'error',
              content: '교수 정보 수정에 실패했습니다.',
            });
          },
        },
      );
    } catch (error) {
      console.error('Validation Failed:', error);
    }
  };

  const handleDelete = (record: ProfessorResponse) => {
    deleteMutation.mutate(
      { id: record.id },
      {
        onSuccess: () => {
          messageApi.open({
            type: 'success',
            content: '교수수가 성공적으로 삭제되었습니다.',
          });
          queryClient.invalidateQueries({
            queryKey: [useProfessorServiceGetApiV1ProfessorsKey],
          });
        },
        onError: (e) => {
          console.error('삭제 실패:', e);
          messageApi.open({
            type: 'error',
            content: '교수 삭제에 실패했습니다.',
          });
        },
      },
    );
  };

  return (
    <Suspense fallback={<Spin />}>
      {contextHolder}
      {/* 교수 추가 로직 필요 */}
      <ProfessorTableView
        form={form}
        data={professorList}
        register={register}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </Suspense>
  );
}

export default ProfessorTable;
