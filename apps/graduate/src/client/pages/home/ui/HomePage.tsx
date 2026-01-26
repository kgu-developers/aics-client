import GraduationStatusHeader from './GraduationStatusHeader';
import NavigationButtons from './NavigationButtons';
import NoticeSection from './NoticeSection';
import { useHomePageData } from '../hooks/useHomePageData';
import * as styles from '../styles/HomePage.css';

export default function HomePage() {
  const homePageData = useHomePageData();

  return (
    <div className={styles.mainSection}>
      <section className={styles.upperSection}>
        <GraduationStatusHeader title={homePageData.title} description={homePageData.description} />
        <NavigationButtons button={homePageData.button} />
      </section>
      <NoticeSection />
    </div>
  );
}
