import { Link } from '@tanstack/react-router'
import { Button } from 'antd'

import { useAuthStore } from '~/shared/stores'

import * as styles from '../styles/Header.css'

export default function Header() {
  const { setIsLoggedIn } = useAuthStore()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/">
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </Link>
        <span className={styles.title}>
          컴퓨터공학전공 졸업 요건 취득 서비스
        </span>
      </div>
      <Button onClick={() => setIsLoggedIn(false)}>로그아웃</Button>
    </header>
  )
}
