import { createFileRoute } from '@tanstack/react-router';

import { CertificationAdminPage } from '~/pages/admin/certification';
import { CertificationPage } from '~/pages/client/certification';

export const Route = createFileRoute('/_afterLogin/certification')({
  component: () => {
    const { auth } = Route.useRouteContext();
    if (auth.isAdmin) {
      return <CertificationAdminPage />;
    }
    return <CertificationPage />;
  },
});
