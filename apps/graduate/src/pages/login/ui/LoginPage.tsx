import { Navigate, useNavigate } from '@tanstack/react-router'

import { Button } from '~/shared/components'
import { ROUTE } from '~/shared/constants/route'
import { useAuthStore } from '~/shared/stores'

import { HomePage } from '~/pages/client/home'

export default function LoginPage() {
  const navigate = useNavigate()
  const { setIsLoggedIn, setIsAdmin, isAdmin, isLoggedIn } = useAuthStore()

  if (isLoggedIn && isAdmin) {
    return <Navigate to={ROUTE.HOME} />
  }
  if (isLoggedIn && !isAdmin) {
    return <HomePage />
  }

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
          onClick={() => {
            setIsLoggedIn(true)
            setIsAdmin(false)
            navigate({ to: '/' })
          }}
        >
          Client 클라이언트
        </Button>
        <Button
          size="lg"
          type="button"
          onClick={() => {
            setIsLoggedIn(true)
            setIsAdmin(true)
            navigate({ to: '/' })
          }}
        >
          Admin 관리자
        </Button>
      </div>
    </div>
  )
}
