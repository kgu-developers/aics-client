'use client';

import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

import LOGO from '~/assets/svgs/kgu-logo-white.svg';
import { PATH, PATHMAP } from '~/constants/path';
import { isLoginAtom } from '~/store/auth';

import * as styles from '~/components/site-footer.css';

function SiteFooter() {
  const isLogin = useAtomValue(isLoginAtom);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <Link href={PATH.MAIN} className={styles.logo}>
          <Image src={LOGO} alt="logo" width={88} />
          <span>AI컴퓨터공학부</span>
        </Link>
        <div className={styles.navLinks}>
          {Object.values(PATHMAP).map((path) => {
            if (path.path === PATH.MY && !isLogin) {
              return null;
            }
            return (
              <div
                key={path.path}
                className={clsx(
                  styles.navGroup,
                  !isLogin && path.path === PATH.MY && styles.hideMyPage,
                )}
              >
                <a href={path.path} className={styles.navGroupTitle}>
                  {path.title}
                </a>
                {'children' in path && (
                  <div className={styles.navGroupLinks}>
                    {Object.values(path.children).map((child) => (
                      <a
                        key={child.path}
                        href={`${path.path}${child.path}`}
                        className={styles.navGroupLink}
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.footerCopy}>
        <small>
          <span>&copy; </span>
          <time dateTime={new Date().getFullYear().toString()}>
            {new Date().getFullYear()}
          </time>
          <span> KGU Developers . All rights reserved.</span>
        </small>
      </div>
    </footer>
  );
}

export { SiteFooter };
