import { ThemeProvider } from '@aics-client/design-system';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider as JotaiProvider } from 'jotai';
import type { Metadata } from 'next';


import { SiteFooter } from '~/shared/components/site-footer/site-footer';
import { SiteHeader } from '~/shared/components/site-header/site-header';

import { pretendardVariable } from '~/app/fonts/pretendard-variable';
import * as styles from '~/app/layout.css';
import Providers from '~/app/providers';

export const metadata: Metadata = {
  title: '경기대학교 AI컴퓨터공학부',
  description: '경기대학교 소프트웨어경영대학 AI컴퓨터공학부 공식 홈페이지',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendardVariable.className}>
        <Providers>
          <JotaiProvider>
            <ThemeProvider className={styles.root}>
              <SiteHeader />
              <main className={styles.main}>{children}</main>
              <SiteFooter />
            </ThemeProvider>
          </JotaiProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  );
}
