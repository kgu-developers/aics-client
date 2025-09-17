import { useLabServiceGetApiV1LabsSuspense } from '~/apis/community/queries/suspense'

export const useLabs = () => {
  const { data } = useLabServiceGetApiV1LabsSuspense()

  return { data: data }
}
