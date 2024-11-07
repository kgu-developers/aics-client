import type { Metadata } from 'next';

import { pretendardVariable } from '~/app/fonts/pretendard-variable';
import '~/styles/normalize.css';

export const metadata: Metadata = {
  title: '경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendardVariable.className}>{children}</body>
    </html>
  );
}
