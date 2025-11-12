import { createFileRoute } from '@tanstack/react-router';

import { AllManagement } from '~/features/all-management/components';

export const Route = createFileRoute('/_afterLogin/graduates-all')({
  component: AllManagement,
});
