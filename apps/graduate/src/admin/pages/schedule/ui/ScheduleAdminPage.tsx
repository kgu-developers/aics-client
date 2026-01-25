import { Table } from 'antd';
import type { ColumnType } from 'antd/es/table';

import { Header } from '~/shared/components';

import ScheduleDescription from './ScheduleDescription';
import ScheduleEditModal from './ScheduleEditModal';
import type { ScheduleItem } from '../model';
import * as style from '../styles/ScheduleAdminPage.css.ts';

import { useScheduleList } from '~/admin/entities/admin-schedule/model';

export default function ScheduleAdminPage() {
  const { data: schedule, isLoading } = useScheduleList();

  const columns: ColumnType<ScheduleItem>[] = [
    {
      title: '단계',
      dataIndex: 'submissionType',
      key: 'submissionType',
      width: 150,
    },
    {
      title: '시작 일정',
      dataIndex: 'startDate',
      key: 'startDate',
      width: 150,
    },
    {
      title: '종료 일정',
      dataIndex: 'endDate',
      key: 'endDate',
      width: 150,
    },
    {
      title: '상태',
      dataIndex: 'status',
      key: 'status',
      width: 200,
    },
  ];

  return (
    <div className={style.container}>
      <Header title='진행일정' />

      <Table
        columns={columns}
        dataSource={schedule}
        loading={isLoading}
        pagination={false}
        bordered
        style={{ marginBottom: '24px' }}
      />

      <ScheduleEditModal scheduleData={schedule ?? []} />

      <Header title='진행일정-상세' />

      <ScheduleDescription />
    </div>
  );
}
