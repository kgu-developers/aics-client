import { useQueryClient } from '@tanstack/react-query';
import { message } from 'antd';

import { useClubServicePatchApiV1ClubsById } from '~/features/club/services';

const CLUB_LIST_QK = ['ClubServiceGetApiV1Clubs'] as const;

export function useUpdateClub() {
  const qc = useQueryClient();
  return useClubServicePatchApiV1ClubsById({
    onSuccess: () => {
      message.success('동아리 정보가 수정되었습니다.');
      qc.invalidateQueries({ queryKey: CLUB_LIST_QK });
    },
    onError: () => message.error('동아리 수정에 실패했습니다.'),
  });
}
