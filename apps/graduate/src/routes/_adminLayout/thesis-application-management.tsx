import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

export const Route = createFileRoute(
  '/_adminLayout/thesis-application-management',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute>
      <div>Hello "/thesis"!</div>
    </ProtectedRoute>
  );
}
