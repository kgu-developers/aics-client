'use client'

import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { cn } from '@aics-client/design-system/utils'

import { PATH } from '~/shared/constants/path'
import { useAuth } from '~/shared/hooks/use-auth'
import { isLoggedInAtom } from '~/shared/stores/auth'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

import * as styles from '~/components/shared/site-header/site-header.css'

function SignInButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { logout } = useAuth()

  return (
    <div className={styles.buttonContainer}>
      {isLoggedIn ? (
        <button type="button" onClick={logout} className={styles.signInButton}>
          로그아웃
        </button>
      ) : (
        <Link href={PATH.SIGN_IN} className={styles.signInButton}>
          로그인
        </Link>
      )}
    </div>
  )
}

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isLoggedIn = useAtomValue(isLoggedInAtom)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={cn(
        styles.headerWrapper,
        isScrolled && styles.headerWrapperScrolled,
      )}
    >
      <header
        className={cn(styles.header, isScrolled && styles.headerScrolled)}
      >
        <MainNav isLoggedIn={isLoggedIn} />
        <MobileNav isLoggedIn={isLoggedIn} />
        <SignInButton isLoggedIn={isLoggedIn} />
      </header>
    </div>
  )
}

export { SiteHeader }
