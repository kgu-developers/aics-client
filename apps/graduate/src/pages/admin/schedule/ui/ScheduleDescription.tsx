import { Button } from 'antd';
import { useEffect, useState } from 'react';

import { TextEditor } from '~/shared/components/TextEditor';

import { descriptionData } from '../mock/schedule';
import * as style from '../styles/ScheduleDescription.css.ts';

export default function ScheduleDescription() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tempDescription, setTempDescription] = useState<string>(
    descriptionData[0]?.description || '',
  );
  const [isSaved, setIsSaved] = useState<boolean>(true);

  useEffect(() => {
    setTempDescription(descriptionData[selectedIndex]?.description || '');
  }, [selectedIndex]);

  const handleSave = () => {
    setIsSaved(true);
    window.alert('설명이 저장되었습니다!');
  };

  const handleTabChange = (index: number) => {
    if (!isSaved) {
      const confirmChange = window.confirm(
        '저장되지 않은 변경 사항이 있습니다. 변경 사항을 저장하지 않고 이동하시겠습니까?',
      );
      if (!confirmChange) return;
    }
    setSelectedIndex(index);
  };

  return (
    <div className={style.descriptionContainer}>
      <div className={style.tabButtons}>
        {descriptionData.map((item, index) => (
          <Button
            key={item.id}
            type={selectedIndex === index ? 'primary' : 'default'}
            onClick={() => handleTabChange(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>

      {descriptionData[selectedIndex] && (
        <TextEditor
          title={descriptionData[selectedIndex].title}
          value={tempDescription}
          onChange={setTempDescription}
          onSave={handleSave}
          isSaved={isSaved}
          onFocus={() => setIsSaved(false)}
          className={style.descriptionCard}
        />
      )}
    </div>
  );
}
