import { Button, DatePicker, Modal, Select } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

import { modalStyles } from '~/shared/config';

import * as style from '../styles/ScheduleEditModal.css.ts';
import type { ScheduleItem } from '../types/schedule.ts';

interface ScheduleEditModalProps {
  scheduleData: ScheduleItem[];
  setScheduleData: React.Dispatch<React.SetStateAction<ScheduleItem[]>>;
}

export default function ScheduleEditModal({
  scheduleData,
  setScheduleData,
}: ScheduleEditModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState('신청접수');
  const [startDate, setStartDate] = useState(dayjs('2025-10-02'));
  const [endDate, setEndDate] = useState(dayjs('2025-10-16'));

  const stageOptions = [
    { value: '신청접수', label: '신청접수' },
    { value: '제안서', label: '제안서' },
    { value: '중간보고서', label: '중간보고서' },
    { value: '최종보고서', label: '최종보고서' },
    { value: '최종 통과', label: '최종 통과' },
    { value: '기타자격', label: '기타자격' },
  ];

  const handleEdit = () => setIsModalOpen(true);

  const handleSubmit = () => {
    if (endDate.isBefore(startDate)) {
      window.alert('종료일이 시작일보다 빠릅니다.');
      return;
    }
    setScheduleData(
      scheduleData.map(item =>
        item.stage === selectedStage
          ? {
              ...item,
              startDate: startDate.format('YYYY-MM-DD'),
              endDate: endDate.format('YYYY-MM-DD'),
            }
          : item,
      ),
    );
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleStageChange = (stage: string) => {
    setSelectedStage(stage);
    const found = scheduleData.find(item => item.stage === stage);
    setStartDate(found ? dayjs(found.startDate) : dayjs());
    setEndDate(found ? dayjs(found.endDate) : dayjs());
  };

  return (
    <>
      <div className={style.editButtonWrapper}>
        <Button type='default' onClick={handleEdit} size='large'>
          수정
        </Button>
      </div>
      <Modal
        title='졸업논문 일정 수정'
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        {...modalStyles('md')}
        okText='수정'
        cancelText='닫기'
        getContainer={false}
      >
        <div className={style.modalContent}>
          <div className={style.formField}>
            <label className={style.label} htmlFor='stage'>
              변경할 일정
            </label>
            <Select
              id='stage'
              value={selectedStage}
              onChange={handleStageChange}
              options={stageOptions}
              className={style.fullWidthSelect}
              size='large'
            />
          </div>
          <div className={style.formField}>
            <label className={style.label} htmlFor='startDate'>
              날짜
            </label>
            <DatePicker
              id='startDate'
              name='startDate'
              value={startDate}
              onChange={date => date && setStartDate(date)}
              className={style.fullWidthDatePicker}
              size='large'
              format='YYYY. MM. DD.'
              placeholder='시작 날짜'
            />
          </div>
          <div className={style.lastFormField}>
            <label className={style.label} htmlFor='endDate'>
              날짜
            </label>
            <DatePicker
              id='endDate'
              name='endDate'
              value={endDate}
              onChange={date => date && setEndDate(date)}
              className={style.fullWidthDatePicker}
              size='large'
              format='YYYY. MM. DD.'
              placeholder='종료 날짜'
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
