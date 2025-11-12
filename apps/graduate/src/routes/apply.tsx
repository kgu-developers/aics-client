import { createFileRoute } from '@tanstack/react-router';

import { ApplyPage } from '~/pages/client/apply';

export const Route = createFileRoute('/apply')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ApplyPage />;
}
