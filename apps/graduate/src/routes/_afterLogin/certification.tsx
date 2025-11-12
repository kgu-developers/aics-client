import { createFileRoute } from '@tanstack/react-router';

import { CertificationManagement } from '~/features/certification-management/components';

import { CertificationPage } from '~/pages/client/certification';

export const Route = createFileRoute('/_afterLogin/certification')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <CertificationManagement />;
    }
    return <CertificationPage />;
  },
});
