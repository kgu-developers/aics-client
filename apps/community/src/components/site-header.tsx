'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import * as styles from '~/components/site-header.css';

function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <Link href="/">로고</Link>
      </header>
    </div>
  );
}

export { SiteHeader };
