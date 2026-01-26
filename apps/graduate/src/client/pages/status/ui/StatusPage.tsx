import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useState, useMemo } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
  SCHEDULE_COLOR_PALETTE,
  LOADING_MESSAGES,
  EMPTY_MESSAGES,
} from '~/shared/config';
import { LoadingState, EmptyState } from '~/shared/ui';

import * as styles from '../styles/StatusPage.css';

import { useFetchAllSchedule } from '~/client/features/schedule/api/fetchAllSchedule';
import type { Schedule } from '~/client/features/schedule/model/schedule';

dayjs.extend(isBetween);

const localizer = dayjsLocalizer(dayjs);

interface CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  resource: Schedule;
  color: string;
}

export default function StatusPage() {
  const { data: schedules, isLoading } = useFetchAllSchedule();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  const events: CalendarEvent[] = useMemo(() => {
    if (!schedules) return [];

    return schedules.map((schedule, index) => ({
      id: schedule.id,
      title: schedule.submissionType,
      start: dayjs(schedule.startDate).toDate(),
      end: dayjs(schedule.endDate).toDate(),
      resource: schedule,
      color: SCHEDULE_COLOR_PALETTE[index % SCHEDULE_COLOR_PALETTE.length],
    }));
  }, [schedules]);

  const getSchedulesForDate = (date: Date): Schedule[] => {
    if (!schedules) return [];
    const dateDayjs = dayjs(date);
    return schedules.filter(schedule => {
      const start = dayjs(schedule.startDate);
      const end = dayjs(schedule.endDate);
      return dateDayjs.isBetween(start, end, 'day', '[]');
    });
  };

  const selectedDateSchedules = getSchedulesForDate(selectedDate);

  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        {isLoading ? (
          <LoadingState message={LOADING_MESSAGES.SCHEDULE} />
        ) : (
          <>
            <div className={styles.calendarWrapper}>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                date={currentDate}
                onNavigate={date => setCurrentDate(date)}
                style={{ height: 600 }}
                views={['month']}
                defaultView='month'
                onSelectSlot={slotInfo => setSelectedDate(slotInfo.start)}
                onSelectEvent={event => setSelectedDate(event.start)}
                selectable
                className={styles.bigCalendar}
                formats={{
                  monthHeaderFormat: (date: Date) =>
                    dayjs(date).format('YYYY년 M월'),
                  weekdayFormat: (date: Date) => dayjs(date).format('ddd'),
                  dateFormat: (date: Date) => dayjs(date).format('D'),
                }}
                eventPropGetter={event => ({
                  style: {
                    backgroundColor: event.color,
                    borderColor: event.color,
                    color: '#4B4E57',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '2px 4px',
                  },
                })}
                messages={{
                  today: '오늘',
                  previous: '◀',
                  next: '▶',
                  month: '월',
                  week: '주',
                  day: '일',
                  agenda: '일정',
                  date: '날짜',
                  time: '시간',
                  event: '일정',
                  noEventsInRange: '이 기간에 일정이 없습니다.',
                  showMore: () => '',
                }}
              />
            </div>

            <div className={styles.scheduleDetail}>
              <h2 className={styles.detailTitle}>
                {dayjs(selectedDate).format('YYYY년 M월 D일')} 오늘의 일정
              </h2>
              {selectedDateSchedules.length === 0 ? (
                <EmptyState message={EMPTY_MESSAGES.SCHEDULE} />
              ) : (
                <div className={styles.scheduleList}>
                  {selectedDateSchedules.map(schedule => (
                    <div key={schedule.id} className={styles.scheduleItem}>
                      <div className={styles.scheduleItemHeader}>
                        <h3 className={styles.scheduleTitle}>
                          {schedule.submissionType}
                        </h3>
                        <span className={styles.scheduleStatus}>
                          {schedule.status}
                        </span>
                      </div>
                      <div className={styles.schedulePeriod}>
                        {schedule.startDate} ~ {schedule.endDate}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
