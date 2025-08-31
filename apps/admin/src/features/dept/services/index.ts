import { AboutService } from '~/apis/admin/requests/services.gen'
export const createDeptIntro: typeof AboutService.postApiV1Abouts = (data) =>
  AboutService.postApiV1Abouts(data)

export const updateDeptIntro: typeof AboutService.patchApiV1AboutsById = (
  data,
) => AboutService.patchApiV1AboutsById(data)

export type { AboutServiceGetApiV1AboutsDefaultResponse } from '~/apis/community/queries/common'

export { UseAboutServiceGetApiV1AboutsKeyFn } from '~/apis/community/queries'
export {
  useAboutServicePostApiV1Abouts,
  useAboutServicePatchApiV1Abouts,
} from '~/apis/admin/queries'
export { useAboutServiceGetApiV1AboutsSuspense } from '~/apis/community/queries/suspense'
