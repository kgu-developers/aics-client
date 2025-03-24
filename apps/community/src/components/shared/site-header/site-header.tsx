'use client';

import clsx from 'clsx/lite';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { PATH } from '~/constants/path';
import { useAuth } from '~/hooks/use-auth';
import { isLoginAtom } from '~/store/auth';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

import * as styles from '~/components/shared/site-header/site-header.css';

function SignInButton({ isLogin }: { isLogin: boolean }) {
  const { logout } = useAuth();

  return (
    <div className={styles.buttonContainer}>
      {isLogin ? (
        <button type="button" onClick={logout} className={styles.signInButton}>
          로그아웃
        </button>
      ) : (
        <Link href={PATH.SIGN_IN} className={styles.signInButton}>
          로그인
        </Link>
      )}
    </div>
  );
}

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isLogin = useAtomValue(isLoginAtom);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        styles.headerWrapper,
        isScrolled && styles.headerWrapperScrolled,
      )}
    >
      <header
        className={clsx(styles.header, isScrolled && styles.headerScrolled)}
      >
        <MainNav isLogin={isLogin} />
        <MobileNav isLogin={isLogin} />
        <SignInButton isLogin={isLogin} />
      </header>
    </div>
  );
}

export { SiteHeader };
