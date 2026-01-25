import dayjs from 'dayjs';

import * as styles from '../styles/HomePage.css';

export default function WeekOnlyCalendar() {
  const today = dayjs();
  const currentWeekStart = today.startOf('week');
  const dayLabels = ['일', '월', '화', '수', '목', '금', '토'];
  const currentWeekDays = Array.from({ length: 7 }, (_, index) =>
    currentWeekStart.add(index, 'day'),
  );

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarGrid}>
        {dayLabels.map(label => (
          <span key={label} className={styles.calendarDayLabel}>
            {label}
          </span>
        ))}
      </div>
      <div className={styles.calendarGrid}>
        {currentWeekDays.map(date => {
          const isToday = date.isSame(today, 'day');
          return (
            <div
              key={date.format('YYYY-MM-DD')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className={`${styles.calendarDateCircle} ${
                  isToday ? styles.calendarDateToday : styles.calendarDateNormal
                }`}
              >
                {date.format('D')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
