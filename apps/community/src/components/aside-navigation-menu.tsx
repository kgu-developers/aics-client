'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as styles from '~/components/aside-navigation-menu.css';
import { PAGES } from '~/constants/pages';
import { PATHMAP, type pathmapKey } from '~/constants/path';

function AsideNavigationMenu() {
  const pathname = usePathname();
  const page = PAGES.find((page) => pathname.startsWith(page.base));

  return (
    <aside className={styles.navigationContainer}>
      <h2 className={styles.navigationTitle}>
        {PATHMAP[page?.id as pathmapKey]}
      </h2>
      <div className={styles.separator} />
      {page?.path.map((path) => (
        <Link
          className={styles.navigationLink}
          key={path.url}
          href={page.base + path.url}
        >
          {path.title}
        </Link>
      ))}
    </aside>
  );
}

export { AsideNavigationMenu };
