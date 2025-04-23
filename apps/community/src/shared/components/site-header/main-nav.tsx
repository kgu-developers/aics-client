import Image from 'next/image'
import Link from 'next/link'

import LOGO from '~/shared/assets/svgs/kgu-logo.svg'
import * as styles from '~/shared/components/site-header/main-nav.css'
import { PATH, PATHMAP } from '~/shared/constants/path'

function MainNav({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className={styles.leftSide}>
      <Link href={PATH.MAIN} className={styles.logo}>
        <Image src={LOGO} alt="logo" width={60} height={60} />
        <span>AI컴퓨터공학부</span>
      </Link>
      <nav className={styles.nav}>
        {Object.values(PATHMAP).map((path) => {
          if (path.path === PATH.MY && !isLoggedIn) {
            return null
          }
          return (
            <div key={path.path} className={styles.navGroup}>
              {'children' in path ? (
                <>
                  <div className={styles.navGroupTitle}>{path.title}</div>
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
                </>
              ) : (
                <Link href={path.path} className={styles.navGroupTitle}>
                  {path.title}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export { MainNav }
