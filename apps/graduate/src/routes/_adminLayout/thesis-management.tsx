import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { ThesisManagement } from '~/features/thesis-management/components';
export const Route = createFileRoute('/_adminLayout/thesis-management')({
  component: () => (
    <ProtectedRoute>
      <ThesisManagement />
    </ProtectedRoute>
  ),
});
