import type { Metadata } from 'next';

import * as styles from '~/app/professor/layout.css';
import { AsideNavigationMenu } from '~/components/aside-navigation-menu';

export const metadata: Metadata = {
  title: '교수진 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
};

const PROFESSOR_PATHS = [{ title: '교수진 소개', url: '/professor' }];

export default function ProfessorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base="member" paths={PROFESSOR_PATHS} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
