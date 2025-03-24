import Image from 'next/image';
import Link from 'next/link';

import LOGO from '~/assets/svgs/kgu-logo.svg';
import { PATH, PATHMAP } from '~/constants/path';

import * as styles from '~/components/shared/site-header/main-nav.css';

function MainNav({ isLogin }: { isLogin: boolean }) {
  return (
    <div className={styles.leftSide}>
      <Link href={PATH.MAIN} className={styles.logo}>
        <Image src={LOGO} alt="logo" width={60} height={60} />
        <span>AI컴퓨터공학부</span>
      </Link>
      <nav className={styles.nav}>
        {Object.values(PATHMAP).map((path) => {
          if (path.path === PATH.MY && !isLogin) {
            return null;
          }
          return (
            <div key={path.path} className={styles.navGroup}>
              {'children' in path ? (
                <div className={styles.navGroupTitle}>{path.title}</div>
              ) : (
                <Link href={path.path} className={styles.navGroupTitle}>
                  {path.title}
                </Link>
              )}

              {'children' in path && (
                <div className={styles.navGroupLinks}>
                  {Object.values(path.children).map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      className={styles.navGroupLink}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export { MainNav };
