import { Outlet } from '@tanstack/react-router';

import { Sidebar } from '~/admin/widgets/sidebar';

export default function AdminLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main
        style={{
          flex: '1 1 auto',
          overflow: 'auto',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
