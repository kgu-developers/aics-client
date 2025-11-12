import { AsideNavigationMenu } from '~/shared/components/aside-navigation-menu/aside-navigation-menu';
import { PATHMAP } from '~/shared/constants/path';

import * as styles from '~/app/(about)/layout.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base={PATHMAP.about} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
