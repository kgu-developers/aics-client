import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '~/shared/components'

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
        <Button
          size="lg"
          type="button"
          onClick={() => navigate({ to: '/client' })}
        >
          Client 클라이언트
        </Button>
        <Button
          size="lg"
          type="button"
          onClick={() => navigate({ to: '/admin' })}
        >
          Admin
        </Button>
        <Button
          size="md"
          variant="outline"
          type="button"
          onClick={() => navigate({ to: '/client' })}
        >
          Client 클라이언트
        </Button>
        <Button
          size="md"
          variant="outlineActive"
          type="button"
          onClick={() => navigate({ to: '/admin' })}
        >
          Admin
        </Button>
        <Button
          size="sm"
          variant="sub"
          type="button"
          onClick={() => navigate({ to: '/client' })}
        >
          Client 클라이언트
        </Button>
        <Button
          size="md"
          variant="outlineActive"
          type="button"
          onClick={() => navigate({ to: '/admin' })}
        >
          Admin
        </Button>
      </div>
    </div>
  )
}
