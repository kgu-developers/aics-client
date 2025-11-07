import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_clientLayout')({
  beforeLoad: () => {},
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
