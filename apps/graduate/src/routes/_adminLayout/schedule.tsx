import { createFileRoute } from '@tanstack/react-router';

import { ProtectedRoute } from '~/shared/components';

import { ScheduleSection } from '~/features/schedule/components';

export const Route = createFileRoute('/_adminLayout/schedule')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute>
      <ScheduleSection />
    </ProtectedRoute>
  );
}
