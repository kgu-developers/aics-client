import { createFileRoute } from '@tanstack/react-router';

import { SignupPage } from '~/pages/signup';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupPage />;
}
