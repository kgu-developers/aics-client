import { createFileRoute } from '@tanstack/react-router';

import { HomePage } from '~/pages/client/home';

export const Route = createFileRoute('/_afterLogin/')({
  component: App,
});

function App() {
  const { auth } = Route.useRouteContext();
  if (!auth.isAdmin) {
    return <HomePage />;
  }
  return <>작업을 선택하세요</>;
}
