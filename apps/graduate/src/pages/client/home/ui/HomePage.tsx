import GraduationStatusHeader from './GraduationStatusHeader';
import NoticeSection from './NoticeSection';
import TodayScheduleSection from './TodayScheduleSection';
import { useHomePageData } from '../hooks/useHomePageData';
import * as styles from '../styles/HomePage.css';
import { formatDateKorean } from '../utils/dateFormat';

export default function HomePage() {
  const today = new Date();
  const formattedDate = formatDateKorean(today);
  const homePageData = useHomePageData();

  return (
    <div className={styles.mainSection}>
      <section className={styles.upperSection}>
        <GraduationStatusHeader {...homePageData} />
        <TodayScheduleSection date={formattedDate} />
      </section>
      <NoticeSection />
    </div>
  );
}
