import { createFileRoute } from '@tanstack/react-router';

import { AllManagementPage } from '~/pages/admin/all';

export const Route = createFileRoute('/_afterLogin/all')({
  component: AllManagementPage,
});
