'use client';

import Link from 'next/link';

import * as styles from '~/components/aside-navigation-menu.css';
import { PATH_TITLES, type pathTitleKey } from '~/constants/path';

interface Props {
  paths: { title: string; url: string }[];
  base: pathTitleKey;
}

function AsideNavigationMenu({ paths, base }: Props) {
  return (
    <aside className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <h2 className={styles.navigationTitle}>{PATH_TITLES[base]}</h2>
        <div className={styles.separator} />
        {paths.map((path) => (
          <Link
            className={styles.navigationLink}
            key={path.url}
            href={path.url}
          >
            {path.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export { AsideNavigationMenu };
