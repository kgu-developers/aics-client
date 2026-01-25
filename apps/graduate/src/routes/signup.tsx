import { createFileRoute } from '@tanstack/react-router';

import { SignupPage } from '~/client/pages/auth/signup';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignupPage />;
}
