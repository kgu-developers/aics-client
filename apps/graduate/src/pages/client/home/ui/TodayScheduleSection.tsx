import { Section } from '~/shared/components';

import WeekCalendar from './WeekCalendar';
import * as styles from '../styles/HomePage.css';

import { ScheduleTimeLine } from '~/feature/schedule';
import { vars } from '~/vars.css';

interface TodayScheduleSectionProps {
  date: string;
}

export default function TodayScheduleSection({
  date,
}: TodayScheduleSectionProps) {
  return (
    <section className={styles.scheduleCard}>
      <div className={styles.scheduleHeader}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <p className={styles.headerDate}>{date}</p>
          <h2 className={styles.headerText}>졸업 요건 취득 일정</h2>
        </div>
      </div>
      <WeekCalendar />
      <ScheduleTimeLine />
    </section>
  );
}
