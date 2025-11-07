import { Button } from 'antd';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import * as style from './ScheduleDescription.css';
import { descriptionData } from '../mock/schedule';

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

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link'],
      ['clean'],
    ],
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
        <div className={style.descriptionCard}>
          <div className={style.descriptionHeader}>
            <h3 className={style.descriptionTitle}>
              {descriptionData[selectedIndex].title}
            </h3>
          </div>
          <ReactQuill
            theme='snow'
            value={tempDescription}
            onChange={setTempDescription}
            onFocus={() => setIsSaved(false)}
            modules={modules}
            className={style.quillEditor}
          />
          <div className={style.saveButtonWrapper}>
            <Button disabled={isSaved} type='primary' onClick={handleSave}>
              {isSaved ? '저장됨' : '저장'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
