import { createFileRoute } from '@tanstack/react-router';

import { CertificationAdminPage } from '~/admin/pages/certification';
import { CertificationPage } from '~/client/pages/certification';

export const Route = createFileRoute('/_afterLogin/certification')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <CertificationAdminPage />;
    }
    return <CertificationPage />;
  },
});
