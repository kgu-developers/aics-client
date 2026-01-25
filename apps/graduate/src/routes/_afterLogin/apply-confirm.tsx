import { createFileRoute } from '@tanstack/react-router';

import ApplyConfirmPage from '~/client/pages/apply/ui/ApplyConfirmPage';

export const Route = createFileRoute('/_afterLogin/apply-confirm')({
  component: ApplyConfirmPage,
});
