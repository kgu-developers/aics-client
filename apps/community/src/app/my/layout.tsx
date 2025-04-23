import type { Metadata } from 'next'

import * as styles from '~/app/my/layout.css'
import { AsideNavigationMenu } from '~/shared/components/aside-navigation-menu/aside-navigation-menu'
import { PATHMAP } from '~/shared/constants/path'

export const metadata: Metadata = {
  title: '마이페이지 - 경기대학교 AI컴퓨터공학부',
  description: '경기대학교 AI컴퓨터공학부의 활동과 소식을 소개해요.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base={PATHMAP.my} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
