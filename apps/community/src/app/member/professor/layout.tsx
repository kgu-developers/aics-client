import type { Metadata } from 'next';

import * as styles from '~/app/member/professor/layout.css';

export const metadata: Metadata = {
  title: '교수진 소개 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부의 교수진을 소개해요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.layout}>{children}</div>;
}
