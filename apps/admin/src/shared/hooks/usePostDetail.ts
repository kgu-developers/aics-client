import { usePostServiceGetApiV1PostsByPostIdSuspense } from '~/apis/community/queries/suspense';

interface UsePostDetailProps {
  postId: number;
}

export const usePostDetail = ({ postId }: UsePostDetailProps) => {
  const { data } = usePostServiceGetApiV1PostsByPostIdSuspense({
    postId: postId,
  });

  return {
    data: data,
  };
};
