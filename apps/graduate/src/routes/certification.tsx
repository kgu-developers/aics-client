import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { CertificationPage } from '~/pages/client/certification';

export const Route = createFileRoute('/certification')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute isClient>
      <CertificationPage />
    </ProtectedRoute>
  );
}
