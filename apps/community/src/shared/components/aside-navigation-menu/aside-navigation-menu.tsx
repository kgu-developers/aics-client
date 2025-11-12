'use client';

import Link from 'next/link';

import * as styles from '~/shared/components/aside-navigation-menu/aside-navigation-menu.css';
import type { TPathMap } from '~/shared/constants/path';

interface AsideNavigationMenuProps {
  base: {
    title: string;
    path: string;
    children?: TPathMap;
  };
}

function AsideNavigationMenu({ base }: AsideNavigationMenuProps) {
  return (
    <aside className={styles.navigationContainer}>
      <nav className={styles.navigationWrapper}>
        <h2 className={styles.navigationTitle}>{base.title}</h2>
        <div className={styles.separator} />
        {base.children ? (
          Object.values(base.children).map(({ path, title }) => (
            <Link className={styles.navigationLink} key={path} href={path}>
              {title}
            </Link>
          ))
        ) : (
          <Link className={styles.navigationLink} href={base.path}>
            {base.title}
          </Link>
        )}
      </nav>
    </aside>
  );
}

export { AsideNavigationMenu };
