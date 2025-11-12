import { usePostServiceGetApiV1PostsSuspense } from '~/apis/community/queries/suspense';

interface UseNewsListProps {
  page: number;
  size: number;
  keywords?: string;
}

export const useNewsList = ({ page, size, keywords }: UseNewsListProps) => {
  const { data } = usePostServiceGetApiV1PostsSuspense({
    category: 'NEWS',
    page: page,
    size: size,
    keywords: keywords ?? undefined,
  });

  return {
    data: data,
  };
};
