import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { MY_PROFILE_QUERY_KEYS } from '~/features/profile/services/queries'
import { END_POINT } from '~/shared/constants/api'
import { PATH } from '~/shared/constants/path'
import { http } from '~/shared/utils/http'

interface MyPassword {
  originalPassword: string
  newPassword: string
}

export const useChangePasswordMutation = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (data: MyPassword) => {
      return http.patch(END_POINT.CHANGE_PASSWORD, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: MY_PROFILE_QUERY_KEYS.PROFILE(),
      })
      alert('비밀번호 변경이 완료되었습니다.')
      router.push(PATH.MY)
    },
    onError: () => {
      alert('현재 비밀번호를 다시 확인해주세요.')
    },
  })
}
