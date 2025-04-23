import * as styles from '~/app/(about)/layout.css'
import { AsideNavigationMenu } from '~/components/aside-navigation-menu'
import { PATHMAP } from '~/shared/constants/path'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base={PATHMAP.about} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
