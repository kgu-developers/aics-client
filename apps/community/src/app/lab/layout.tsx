import type { Metadata } from 'next';

import * as styles from '~/app/lab/layout.css';
import { AsideNavigationMenu } from '~/components/aside-navigation-menu';

export const metadata: Metadata = {
  title: '연구실 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요.',
};

const LAB_PATHS = [{ title: '연구실 소개', url: '/lab' }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base="research" paths={LAB_PATHS} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
