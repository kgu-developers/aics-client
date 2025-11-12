import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_adminLayout')({
  component: () => <Outlet />,
});
