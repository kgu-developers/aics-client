import { useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import { useClubServicePostApiV1Clubs } from '~/features/club/services'

const CLUB_LIST_QK = ['ClubServiceGetApiV1Clubs'] as const

export function useCreateClub() {
  const qc = useQueryClient()
  return useClubServicePostApiV1Clubs({
    onSuccess: () => {
      message.success('동아리 추가 완료')
      qc.invalidateQueries({ queryKey: CLUB_LIST_QK })
    },
    onError: () => message.error('동아리 추가 실패'),
  })
}
