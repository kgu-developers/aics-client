'use client';

import { usePathname } from 'next/navigation';

import { Breadcrumb } from '@aics-client/design-system';
import { PATHMAP } from '~/constants/path';
import * as styles from '~/components/page-header.css';

interface TreeProps {
  pathmap: {
    title: string;
    path: string;
    children?: {
      [key: string]: {
        title: string;
        path: string;
      };
    };
  };
  paths: string[];
  level: number;
}

function Tree({ pathmap, paths, level }: TreeProps) {
  const newPathmap = pathmap.children?.[
    paths[level + 1] as keyof typeof pathmap.children
  ] ?? {
    title: '',
    path: '',
  };

  return level !== paths.length - 1 ? (
    <>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href={`/${paths.slice(0, level + 1).join('/')}`}>
          {pathmap.title}
        </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Tree pathmap={newPathmap} paths={paths} level={level + 1} />
    </>
  ) : (
    <>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>{pathmap.title}</Breadcrumb.Page>
      </Breadcrumb.Item>
    </>
  );
}

interface PageHeaderProps {
  title: string;
  description: string;
}

function PageHeader({ title, description }: PageHeaderProps) {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path !== '');

  return (
    <div className={styles.pageHeaderWrapper}>
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">홈</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Tree
            pathmap={PATHMAP[paths[0] as keyof typeof PATHMAP]}
            paths={paths}
            level={0}
          />
        </Breadcrumb.List>
      </Breadcrumb>

      <div className={styles.pageHeaderTitle}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export { PageHeader };
