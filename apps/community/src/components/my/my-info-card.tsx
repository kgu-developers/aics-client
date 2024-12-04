'use client';

import { Button, Input } from '@aics-client/design-system';
import { useState } from 'react';
import * as style from '~/components/my/my-info-card.css';

interface MyInfoCardProps {
  title: string;
  layout?: 'default' | 'singleColumn';
  children: React.ReactNode;
}

interface MyInfoFieldProps {
  title: string;
  value: string;
}

interface MyInfoEditableFieldProps extends MyInfoFieldProps {
  onSave?: (value: string) => void;
}

function MyInfoCard({ title, children, layout = 'default' }: MyInfoCardProps) {
  return (
    <div className={style.cardWrapper}>
      <h2 className={style.cardTitle}>{title}</h2>
      <div className={style.cardContent[layout]}>{children}</div>
    </div>
  );
}

function MyInfoField({ title, value }: MyInfoFieldProps) {
  return (
    <div>
      <h3 className={style.fieldTitle}>{title}</h3>
      <p className={style.field}>{value}</p>
    </div>
  );
}

function MyInfoEditableField({
  title,
  value,
  onSave,
}: MyInfoEditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={style.editFieldWrapper}>
      <div className={style.editFieldContent}>
        <h3 className={style.fieldTitle}>{title}</h3>
        <div className={style.editField}>
          {isEditing ? (
            <Input
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              placeholder={value}
              type="text"
            />
          ) : (
            currentValue
          )}
        </div>
      </div>

      {isEditing ? (
        <div className={style.buttonWrapper}>
          <Button
            color="secondary"
            onClick={() => {
              setIsEditing(false);
              onSave?.(currentValue);
            }}
          >
            저장
          </Button>
          <Button color="secondary" onClick={handleEditToggle}>
            취소
          </Button>
        </div>
      ) : (
        <Button color="secondary" onClick={handleEditToggle}>
          설정
        </Button>
      )}
    </div>
  );
}

MyInfoCard.Field = MyInfoField;
MyInfoCard.EditableField = MyInfoEditableField;

export { MyInfoCard };
