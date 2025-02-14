import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: SignInPage,
});

function SignInPage() {
  return <div>signin</div>;
}
