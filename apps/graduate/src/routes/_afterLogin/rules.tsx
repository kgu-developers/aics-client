import { createFileRoute } from '@tanstack/react-router';

import { RulesAdminPage } from '~/pages/admin/rules';

export const Route = createFileRoute('/_afterLogin/rules')({
  component: RouteComponent,
});

function RouteComponent() {
  const { auth } = Route.useRouteContext();
  if (!auth.isAdmin) {
    return <>유저사이드</>;
  }
  return <RulesAdminPage />;
}
