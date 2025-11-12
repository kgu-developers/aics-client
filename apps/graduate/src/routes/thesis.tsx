import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { ThesisPage } from '~/pages/client/thesis';

export const Route = createFileRoute('/thesis')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute isClient>
      <ThesisPage />
    </ProtectedRoute>
  );
}
