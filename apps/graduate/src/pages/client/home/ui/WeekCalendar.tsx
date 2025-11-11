import dayjs from 'dayjs'

import { vars } from '~/vars.css'

export default function WeekOnlyCalendar() {
  const today = dayjs()
  const currentWeekStart = today.startOf('week')
  const dayLabels = ['일', '월', '화', '수', '목', '금', '토']
  const currentWeekDays = Array.from({ length: 7 }, (_, index) =>
    currentWeekStart.add(index, 'day'),
  )

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 360,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          columnGap: 8,
          fontSize: 12,
          fontWeight: 500,
          color: vars.colors.subDark,
          textAlign: 'center',
        }}
      >
        {dayLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          columnGap: 8,
          textAlign: 'center',
        }}
      >
        {currentWeekDays.map((date) => {
          const isToday = date.isSame(today, 'day')
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
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 18,
                  fontWeight: 600,
                  color: isToday ? '#FFFFFF' : '#202124',
                  backgroundColor: isToday ? vars.colors.main : 'transparent',
                }}
              >
                {date.format('D')}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
