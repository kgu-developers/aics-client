import { message } from 'antd'
import { queryClient } from '~/utils/get-query-client'
import { UseAboutServiceGetApiV1AboutsKeyFn } from '~/features/dept/services'
import {
  useAboutServicePostApiV1Abouts,
  useAboutServicePatchApiV1Abouts,
} from '~/features/dept/services'
import type {
  AboutCreateRequest,
  AboutUpdateRequest,
} from '~/apis/admin/requests/types.gen'
import {
  DEPT_INTRO_CATEGORY,
  DEPT_INTRO_MESSAGES,
} from '~/features/dept/constants/deptIntro'
import type { DeptIntroContent } from '~/features/dept/types'

type SaveArgs = {
  currentContent: DeptIntroContent
  nextContent: AboutCreateRequest['content'] & AboutUpdateRequest['content']
}

type Options = {
  onSuccess?: () => void
  onError?: () => void
}

export function useUpsertDeptIntro(options?: Options) {
  const [msgApi, contextHolder] = message.useMessage()

  const { mutate: postDeptIntro } = useAboutServicePostApiV1Abouts()
  const { mutate: patchDeptIntro } = useAboutServicePatchApiV1Abouts()

  const invalidate = () =>
    queryClient.invalidateQueries({
      queryKey: UseAboutServiceGetApiV1AboutsKeyFn({
        category: DEPT_INTRO_CATEGORY,
      }),
    })

  const save = ({ currentContent, nextContent }: SaveArgs): Promise<void> =>
    new Promise((resolve, reject) => {
      const createBody: AboutCreateRequest = {
        category: DEPT_INTRO_CATEGORY,
        content: nextContent,
      }
      const updateBody: AboutUpdateRequest = {
        content: nextContent,
      }

      const onSuccess = async () => {
        await invalidate()
        await msgApi.open({
          type: 'success',
          content: DEPT_INTRO_MESSAGES.success,
          duration: 0.7,
        })
        options?.onSuccess?.()
        resolve()
      }

      const onError = async () => {
        await msgApi.open({ type: 'error', content: DEPT_INTRO_MESSAGES.error })
        options?.onError?.()
        reject(new Error('dept intro upsert failed'))
      }

      if (currentContent === null) {
        postDeptIntro({ requestBody: createBody }, { onSuccess, onError })
      } else {
        patchDeptIntro(
          { category: DEPT_INTRO_CATEGORY, requestBody: updateBody },
          { onSuccess, onError },
        )
      }
    })

  return { save, contextHolder }
}
