import { Button, DatePicker, Modal, Select } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

import { modalStyles } from '~/shared/config';

import * as style from './ScheduleEditModal.css.ts';
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
  const [selectedStage, setSelectedStage] = useState('??u????');
  const [startDate, setStartDate] = useState(dayjs('2025-10-02'));
  const [endDate, setEndDate] = useState(dayjs('2025-10-16'));

  const stageOptions = [
    { value: '??u????', label: '??u????' },
    { value: '?????', label: '?????' },
    { value: '????????', label: '????????' },
    { value: '?????????', label: '?????????' },
    { value: '???? ???', label: '???? ???' },
    { value: '??????', label: '??????' },
  ];

  const handleEdit = () => setIsModalOpen(true);

  const handleSubmit = () => {
    if (endDate.isBefore(startDate)) {
      window.alert('???????? ????????? ???????.');
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
          ????
        </Button>
      </div>
      <Modal
        title='??????? ???? ????'
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        {...modalStyles('md')}
        okText='????'
        cancelText='???'
        getContainer={false}
      >
        <div className={style.modalContent}>
          <div className={style.formField}>
            <label className={style.label} htmlFor='stage'>
              ?????? ????
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
              ??��
            </label>
            <DatePicker
              id='startDate'
              name='startDate'
              value={startDate}
              onChange={date => date && setStartDate(date)}
              className={style.fullWidthDatePicker}
              size='large'
              format='YYYY. MM. DD.'
              placeholder='???? ??��'
            />
          </div>
          <div className={style.lastFormField}>
            <label className={style.label} htmlFor='endDate'>
              ??��
            </label>
            <DatePicker
              id='endDate'
              name='endDate'
              value={endDate}
              onChange={date => date && setEndDate(date)}
              className={style.fullWidthDatePicker}
              size='large'
              format='YYYY. MM. DD.'
              placeholder='???? ??��'
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
