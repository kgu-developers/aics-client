import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { CertificationManagement } from '~/features/certification-management/components';
export const Route = createFileRoute('/_adminLayout/certification-management')({
  component: () => {
    return (
      <ProtectedRoute>
        <CertificationManagement />
      </ProtectedRoute>
    );
  },
});
