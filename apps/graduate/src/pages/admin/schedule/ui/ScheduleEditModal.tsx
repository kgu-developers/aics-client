import { Button, DatePicker, Modal, Select } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { modalStyles } from '~/shared/config';
import { DATE_FORMAT } from '~/shared/constants';
import { useToast } from '~/shared/hooks';

import { SUBMISSION_TYPE_OPTIONS } from '../constant/schedule.ts';
import { useUpdateSchedule } from '../hooks';
import type { ScheduleItem } from '../model';
import * as style from '../styles/ScheduleEditModal.css.ts';

interface ScheduleEditModalProps {
  scheduleData: ScheduleItem[];
}

interface ScheduleFormData {
  submissionType: string;
  startDate: Dayjs;
  endDate: Dayjs;
}

export default function ScheduleEditModal({
  scheduleData,
}: ScheduleEditModalProps) {
  const { mutate: updateSchedule, isPending } = useUpdateSchedule();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const scheduleOptions = SUBMISSION_TYPE_OPTIONS;

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ScheduleFormData>({
    defaultValues: {
      submissionType: scheduleData[0]?.submissionType || '',
      startDate: dayjs(scheduleData[0]?.startDate),
      endDate: dayjs(scheduleData[0]?.endDate),
    },
  });

  const handleEdit = () => {
    const selectedSchedule = scheduleData[0];
    setValue('submissionType', selectedSchedule.submissionType);
    setValue('startDate', dayjs(selectedSchedule.startDate));
    setValue('endDate', dayjs(selectedSchedule.endDate));
    setIsModalOpen(true);
  };

  const onSubmit = (values: ScheduleFormData) => {
    const selectedSchedule = scheduleData.find(
      item => item.submissionType === values.submissionType,
    );

    if (!selectedSchedule) {
      toast.error('선택된 일정을 찾을 수 없습니다.');
      return;
    }

    updateSchedule(
      {
        scheduleId: selectedSchedule.id,
        data: {
          startDate: values.startDate,
          endDate: values.endDate,
        },
      },
      {
        onSuccess: () => {
          toast.success('일정이 수정되었습니다.');
          setIsModalOpen(false);
          reset();
        },
        onError: () => {
          toast.error('일정 수정에 실패했습니다.');
        },
      },
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    reset();
  };

  const handleScheduleChange = (submissionType: string) => {
    const found = scheduleData.find(
      item => item.submissionType === submissionType,
    );
    if (found) {
      setValue('submissionType', found.submissionType);
      setValue('startDate', dayjs(found.startDate));
      setValue('endDate', dayjs(found.endDate));
    }
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
        onOk={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        {...modalStyles('md')}
        okText='수정'
        cancelText='닫기'
        confirmLoading={isPending}
        getContainer={false}
      >
        <div className={style.modalContent}>
          <div className={style.formField}>
            <label>변경할 일정</label>
            <Controller
              name='submissionType'
              control={control}
              rules={{ required: '일정을 선택하세요' }}
              render={({ field }) => (
                <Select
                  {...field}
                  onChange={value => {
                    field.onChange(value);
                    handleScheduleChange(value);
                  }}
                  options={scheduleData.map(schedule => ({
                    value: schedule.submissionType,
                    label:
                      scheduleOptions.find(
                        opt => opt.value === schedule.submissionType,
                      )?.label ?? schedule.submissionType,
                  }))}
                  className={style.fullWidthSelect}
                  size='large'
                  status={errors.submissionType ? 'error' : ''}
                />
              )}
            />
            {errors.submissionType && (
              <p className={style.errorMessage}>
                {errors.submissionType.message}
              </p>
            )}
          </div>

          <div className={style.formField}>
            <label>시작 날짜</label>
            <Controller
              name='startDate'
              control={control}
              rules={{ required: '시작 날짜를 선택하세요' }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  className={style.fullWidthDatePicker}
                  size='large'
                  format={DATE_FORMAT.DISPLAY_DATE}
                  placeholder='시작 날짜'
                  status={errors.startDate ? 'error' : ''}
                />
              )}
            />
            {errors.startDate && (
              <p className={style.errorMessage}>{errors.startDate.message}</p>
            )}
          </div>

          <div className={style.lastFormField}>
            <label>종료 날짜</label>
            <Controller
              name='endDate'
              control={control}
              rules={{
                required: '종료 날짜를 선택하세요',
                validate: value => {
                  const startDate = watch('startDate');
                  if (!value || !startDate) {
                    return true;
                  }
                  if (value.isBefore(startDate)) {
                    return '종료일이 시작일보다 빠를 수 없습니다.';
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  className={style.fullWidthDatePicker}
                  size='large'
                  format={DATE_FORMAT.DISPLAY_DATE}
                  placeholder='종료 날짜'
                  status={errors.endDate ? 'error' : ''}
                />
              )}
            />
            {errors.endDate && (
              <p className={style.errorMessage}>{errors.endDate.message}</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
