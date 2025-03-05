import * as styles from '~/app/(about)/layout.css';
import { AsideNavigationMenu } from '~/components/aside-navigation-menu';

const ABOUT_PATHS = [
  { title: '학부 소개', url: '/about/dept' },
  { title: '동아리 소개', url: '/about/club' },
  { title: '찾아오시는 길', url: '/about/contact' },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layoutWrapper}>
      <AsideNavigationMenu base="about" paths={ABOUT_PATHS} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
