import { createFileRoute } from '@tanstack/react-router';

import { ScheduleAdminPage } from '~/pages/admin/schedule';

export const Route = createFileRoute('/_afterLogin/schedule')({
  component: ScheduleAdminPage,
});
