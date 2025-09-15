import { usePostServiceGetApiV1PostsSuspense } from '~/apis/community/queries/suspense'

interface UseNoticeListProps {
  page: number
  size: number
  keywords?: string
}

export const useNoticeList = ({ page, size, keywords }: UseNoticeListProps) => {
  const { data } = usePostServiceGetApiV1PostsSuspense({
    category: 'NOTIFICATION',
    page: page,
    size: size,
    keywords: keywords ?? undefined,
  })

  return {
    data: data,
  }
}
