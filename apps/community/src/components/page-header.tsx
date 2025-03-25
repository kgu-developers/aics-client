'use client';

import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { Breadcrumb } from '@aics-client/design-system';

import { PATH_TITLES, type pathmapKey } from '~/constants/path';

import * as styles from '~/components/page-header.css';

interface Props {
  title: string;
  description: string;
}

function PageHeader({ title, description }: Props) {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((path) => path !== '');

  return (
    <div className={styles.pageHeaderWrapper}>
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">홈</Breadcrumb.Link>
          </Breadcrumb.Item>
          {paths.map((path, index) =>
            index !== paths.length - 1 ? (
              <Fragment key={`subpath-${path}`}>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.Link
                    href={`/${paths.slice(0, index + 1).join('/')}`}
                  >
                    {PATH_TITLES[path as pathmapKey]}
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
              </Fragment>
            ) : (
              <Fragment key={`subpath-${path}`}>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.Page>
                    {PATH_TITLES[path as pathmapKey]}
                  </Breadcrumb.Page>
                </Breadcrumb.Item>
              </Fragment>
            ),
          )}
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
