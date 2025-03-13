import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/main/')({
  component: MainPage,
});

function MainPage() {
  return <div>main</div>;
}
