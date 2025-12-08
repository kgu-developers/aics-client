import { Timeline } from 'antd';
import { vars } from '~/vars.css';
import { useFetchAllSchedule } from '../api/fetchAllSchedule';
import { Schedule } from '../model/schedule';

export default function ScheduleTimeLine() {
  const { data, isLoading } = useFetchAllSchedule();

  if (isLoading) return <div></div>;

  if (data?.length === 0 || !data)
    return (
      <div
        style={{
          textAlign: 'center',
          margin: '0 auto',
          padding: vars.spacing.md,
          fontSize: vars.font.size.md,
          fontWeight: vars.font.weight.medium,
          color: vars.colors.subText,
        }}
      >
        일정이 없습니다.
      </div>
    );

  return (
    <Timeline
      items={getTimelineItems(data)}
      style={{ marginTop: vars.spacing.md }}
    />
  );
}

const getTimelineItems = (data: Schedule[]) => {
  return data.map(item => ({
    color: vars.colors.main,

    children: (
      <div>
        <div style={{ fontWeight: 600 }}>{item.submissionType}</div>
        <div style={{ color: 'rgba(0,0,0,0.45)' }}>
          {item.startDate} ~ {item.endDate}
        </div>
      </div>
    ),
  }));
};
