import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Sidebar } from '~/widgets/sidebar'

const queryClient = new QueryClient()
const styles: Record<string, React.CSSProperties> = {
  appLayout: {
    display: 'flex',
  },
  mainContent: {
    flex: '1 1 auto',
    overflow: 'auto',
  },
}

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <div style={styles.appLayout}>
        <Sidebar /> 
        <main style={styles.mainContent}>
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
})
