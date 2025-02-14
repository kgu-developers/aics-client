'use client';

import Link from 'next/link';

import * as styles from '~/components/aside-navigation-menu.css';
import { PATHMAP, type pathmapKey } from '~/constants/path';

interface Props {
  base: pathmapKey;
}

function AsideNavigationMenu({ base }: Props) {
  return (
    <aside className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <h2 className={styles.navigationTitle}>{PATHMAP[base].title}</h2>
        <div className={styles.separator} />
        {'children' in PATHMAP[base] &&
          Object.values(
            PATHMAP[base].children as Record<
              string,
              { title: string; path: string }
            >,
          ).map((path) => (
            <Link
              className={styles.navigationLink}
              key={`.${path.path}`}
              href={`.${path.path}`}
            >
              {path.title}
            </Link>
          ))}
      </div>
    </aside>
  );
}

export { AsideNavigationMenu };
