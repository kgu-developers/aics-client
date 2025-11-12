import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { StatusPage } from '~/pages/client/status';

export const Route = createFileRoute('/status')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute isClient>
      <StatusPage />
    </ProtectedRoute>
  );
}
