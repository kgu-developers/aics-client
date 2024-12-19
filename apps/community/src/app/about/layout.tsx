import * as styles from '~/app/about/layout.css';
import { AsideNavigationMenu } from '~/components/aside-navigation-menu';

const ABOUT_PATHS = [
  { title: '동아리 소개', url: '/about/club' },
  { title: '찾아오시는 길', url: '/about/contact' },
  { title: '학부 소개', url: '/about/dept' },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.navigationContainer}>
        <AsideNavigationMenu base="about" paths={ABOUT_PATHS} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
