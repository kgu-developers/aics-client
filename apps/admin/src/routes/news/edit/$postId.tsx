import { createFileRoute, useMatch } from '@tanstack/react-router';
import { useGetPostById } from '~/apis/community/queries/suspense';
import { EditPostField } from '~/components/posts/edit-post-field';

export const Route = createFileRoute('/news/edit/$postId')({
  component: PostEditPage,
});

function PostEditPage() {
  const { params } = useMatch({ from: '/news/edit/$postId' });
  const { data: post } = useGetPostById({ postId: Number(params.postId) });

  return <EditPostField post={post} />;
}
