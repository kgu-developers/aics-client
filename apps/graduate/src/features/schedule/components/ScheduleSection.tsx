import { Table } from 'antd'
import type { ColumnType } from 'antd/es/table'
import { useState } from 'react'

import { Header } from '~/shared/components'

import { container } from '~/features/notices/components/NoticesSection.css'

import { scheduleData } from '../mock/schedule'
import type { ScheduleItem } from '../types/schedule'
import ScheduleDescription from './ScheduleDescription'
import ScheduleEditModal from './ScheduleEditModal'

export default function ScheduleSection() {
  const [schedule, setSchedule] = useState<ScheduleItem[]>(scheduleData)

  const columns: ColumnType<ScheduleItem>[] = [
    {
      title: '단계',
      dataIndex: 'stage',
      key: 'stage',
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
      width: 100,
    },
  ]

  return (
    <div className={container}>
      <Header title="진행일정" />

      <Table
        columns={columns}
        dataSource={schedule}
        pagination={false}
        bordered
        style={{ marginBottom: '24px' }}
      />

      <ScheduleEditModal
        scheduleData={schedule}
        setScheduleData={setSchedule}
      />

      <Header title="진행일정-상세" />

      <ScheduleDescription />
    </div>
  )
}
