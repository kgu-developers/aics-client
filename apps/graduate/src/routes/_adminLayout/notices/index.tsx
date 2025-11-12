import { createFileRoute } from '@tanstack/react-router';

import { useAuthStore } from '~/shared/stores';

import { NoticesSection } from '~/features/notices/components';

import { NoticePage } from '~/pages/client/notice';

export const Route = createFileRoute('/_adminLayout/notices/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { isAdmin } = useAuthStore();
  if (!isAdmin) {
    return <NoticePage />;
  }

  return <NoticesSection />;
}
