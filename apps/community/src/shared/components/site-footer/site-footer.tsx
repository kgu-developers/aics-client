'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useAtomValue } from 'jotai'

import { cn } from '@aics-client/design-system/utils'

import LOGO from '~/shared/assets/svgs/kgu-logo-white.svg'
import * as styles from '~/shared/components/site-footer/site-footer.css'
import { PATH, PATHMAP } from '~/shared/constants/path'
import { isLoggedInAtom } from '~/shared/stores/auth'

function SiteFooter() {
  const isLoggedIn = useAtomValue(isLoggedInAtom)

  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <Link href={PATH.MAIN} className={styles.logo}>
          <Image src={LOGO} alt="logo" width={88} />
          <span>AI컴퓨터공학부</span>
        </Link>
        <div className={styles.navLinks}>
          {Object.values(PATHMAP).map((path) => {
            if (path.path === PATH.MY && !isLoggedIn) {
              return null
            }
            return (
              <div
                key={path.path}
                className={cn(
                  styles.navGroup,
                  !isLoggedIn && path.path === PATH.MY && styles.hideMyPage,
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
            )
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
  )
}

export { SiteFooter }
