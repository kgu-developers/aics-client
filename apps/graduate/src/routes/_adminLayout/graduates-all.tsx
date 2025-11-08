import { createFileRoute } from '@tanstack/react-router';

import { AllManagement } from '~/features/all-management/components';

export const Route = createFileRoute('/_adminLayout/graduates-all')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AllManagement />;
}
