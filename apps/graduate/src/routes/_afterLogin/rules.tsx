import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

export const Route = createFileRoute('/_afterLogin/rules')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute>
      <div>Hello "/rules"!</div>
    </ProtectedRoute>
  );
}
