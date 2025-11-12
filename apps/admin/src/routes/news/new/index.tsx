import { createFileRoute } from '@tanstack/react-router';

import { PostForm } from '~/shared/components/Post/PostForm';

export const Route = createFileRoute('/news/new/')({
  component: NewPostPage,
});

function NewPostPage() {
  return <PostForm />;
}
