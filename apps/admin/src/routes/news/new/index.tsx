import { createFileRoute } from '@tanstack/react-router';
import { WriteNewPostField } from '~/components/posts/write-new-post-field';

export const Route = createFileRoute('/news/new/')({
  component: NewPostPage,
});

function NewPostPage() {
  return <WriteNewPostField />;
}
