import type { Metadata } from 'next';

import { AsideNavigationMenu } from '~/components/aside-navigation-menu';
import * as styles from '~/app/(board)/news/layout.css';

export const metadata: Metadata = {
  title: '학부소식- 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부의 활동과 소식을 소개해요.',
};

const ABOUT_PATHS = [
  { title: '공지사항', url: '/notice' },
  { title: '학부소식', url: '/news' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base="board" paths={ABOUT_PATHS} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
