import { message } from 'antd';
import { useState } from 'react';
import { useUserServicePostApiV1UsersDelete } from '~/apis/admin/queries';

export function useDeleteUsers() {
  const deleteMutation = useUserServicePostApiV1UsersDelete();
  const [messageApi, contextHolder] = message.useMessage();
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleDeleteUsers = () => {
    if (selectedUsers.length === 0) {
      messageApi.open({
        type: 'warning',
        content: '삭제할 사용자를 선택해주세요.',
      });
      return;
    }

    deleteMutation.mutate(
      { requestBody: { userIds: selectedUsers } },
      {
        onSuccess: () => {
          messageApi.open({
            type: 'success',
            content: '사용자가 성공적으로 삭제되었습니다.',
          });
          setSelectedUsers([]);
        },
        onError: (e) => {
          console.error('삭제 실패:', e);
          messageApi.open({
            type: 'error',
            content: '사용자 삭제에 실패했습니다.',
          });
        },
      },
    );
  };

  return {
    contextHolder,
    selectedUsers,
    setSelectedUsers,
    handleDeleteUsers,
  };
}
