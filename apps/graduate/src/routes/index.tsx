import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="button" onClick={() => navigate({ to: '/client' })}>
          Client
        </button>
        <button type="button" onClick={() => navigate({ to: '/admin' })}>
          Admin
        </button>
      </div>
    </div>
  )
}
