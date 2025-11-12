'use client';

import { Breadcrumb } from '@aics-client/design-system';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';


import * as styles from '~/shared/components/page-header/page-header.css';
import { PATH_TITLES, type pathmapKey } from '~/shared/constants/path';

interface PageHeaderProps {
  title: string;
  description: string;
}

function PageHeader({ title, description }: PageHeaderProps) {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(path => path !== '');

  const renderBreadcrumbs = () =>
    paths.map((path, index) => {
      const isLast = index === paths.length - 1;
      const href = `/${paths.slice(0, index + 1).join('/')}`;

      return (
        <Fragment key={`subpath-${path}`}>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            {isLast ? (
              <Breadcrumb.Page>
                {PATH_TITLES[path as pathmapKey]}
              </Breadcrumb.Page>
            ) : (
              <Breadcrumb.Link href={href}>
                {PATH_TITLES[path as pathmapKey]}
              </Breadcrumb.Link>
            )}
          </Breadcrumb.Item>
        </Fragment>
      );
    });

  return (
    <div className={styles.pageHeaderWrapper}>
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href='/'>홈</Breadcrumb.Link>
          </Breadcrumb.Item>
          {renderBreadcrumbs()}
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
