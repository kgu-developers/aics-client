import { Button } from 'antd';
import { useEffect, useState } from 'react';

import { TextEditor } from '~/shared/components';
import { useScheduleContent, useToast } from '~/shared/hooks';
import type { SubmissionType } from '~/shared/types';

import { SUBMISSION_TYPE_OPTIONS } from '../constant';
import { useUpdateScheduleContent } from '../hooks';
import * as style from '../styles/ScheduleDescription.css.ts';

export default function ScheduleDescription() {
  const [selectedType, setSelectedType] = useState<SubmissionType>('SUBMITTED');
  const [tempDescription, setTempDescription] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(true);
  const { toast, confirm } = useToast();

  const { data: contentData, isLoading } = useScheduleContent(selectedType);
  const { mutate: updateContent, isPending } = useUpdateScheduleContent();

  const submissionOptions = SUBMISSION_TYPE_OPTIONS;

  useEffect(() => {
    if (contentData) {
      setTempDescription(contentData.content);
      setIsSaved(true);
    }
  }, [contentData, selectedType]);

  const handleSave = () => {
    updateContent(
      {
        submissionType: selectedType,
        data: { content: tempDescription },
      },
      {
        onSuccess: () => {
          setIsSaved(true);
          toast.success('설명이 저장되었습니다!');
        },
        onError: () => {
          toast.error('설명 저장에 실패했습니다.');
        },
      },
    );
  };

  const handleTabChange = (type: SubmissionType) => {
    if (!isSaved) {
      confirm({
        title: '저장되지 않은 변경 사항이 있습니다.',
        content: '변경 사항을 저장하지 않고 이동하시겠습니까?',
        onOk: () => {
          setSelectedType(type);
        },
      });
      return;
    }
    setSelectedType(type);
  };

  return (
    <div className={style.descriptionContainer}>
      <div className={style.tabButtons}>
        {submissionOptions.map(option => (
          <Button
            key={option.value}
            type={selectedType === option.value ? 'primary' : 'default'}
            onClick={() => handleTabChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <TextEditor
        title={
          submissionOptions.find(opt => opt.value === selectedType)?.label || ''
        }
        value={isLoading ? '' : tempDescription}
        onChange={setTempDescription}
        onSave={handleSave}
        isSaved={isSaved && !isPending}
        onFocus={() => setIsSaved(false)}
        className={style.descriptionCard}
      />
    </div>
  );
}
