import { useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { useClubServiceDeleteApiV1ClubsById } from '~/features/club/services';

const CLUB_LIST_QK = ['ClubServiceGetApiV1Clubs'] as const;

export function useDeleteClub() {
  const qc = useQueryClient();
  return useClubServiceDeleteApiV1ClubsById({
    onSuccess: () => {
      message.success('동아리가 삭제되었습니다.');
      qc.invalidateQueries({ queryKey: CLUB_LIST_QK });
    },
    onError: () => message.error('동아리 삭제에 실패했습니다.'),
  });
}
