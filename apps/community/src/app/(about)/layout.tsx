import * as styles from '~/app/(about)/layout.css';
import { AsideNavigationMenu } from '~/components/aside-navigation-menu';

const _ABOUT_PATHS = [
  { title: '학부 소개', url: '/dept' },
  { title: '동아리 소개', url: '/club' },
  { title: '찾아오시는 길', url: '/contact' },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base="about" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
