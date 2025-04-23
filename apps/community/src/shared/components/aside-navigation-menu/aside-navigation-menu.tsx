'use client'

import Link from 'next/link'

import * as styles from '~/shared/components/aside-navigation-menu/aside-navigation-menu.css'
import type { TPathMap } from '~/shared/constants/path'

interface Props {
  base: {
    title: string
    path: string
    children?: TPathMap
  }
}

function AsideNavigationMenu({ base }: Props) {
  return (
    <aside className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <h2 className={styles.navigationTitle}>{base.title}</h2>
        <div className={styles.separator} />
        {base.children ? (
          Object.values(base.children).map((path) => (
            <Link
              className={styles.navigationLink}
              key={path.path}
              href={path.path}
            >
              {path.title}
            </Link>
          ))
        ) : (
          <Link className={styles.navigationLink} href={base.path}>
            {base.title}
          </Link>
        )}
      </div>
    </aside>
  )
}

export { AsideNavigationMenu }
