'use client';

import { Button, Input } from '@aics-client/design-system';
import { useState } from 'react';
import * as styles from '~/components/my/my-info-card.css';

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
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent[layout]}>{children}</div>
    </div>
  );
}

function MyInfoField({ title, value }: MyInfoFieldProps) {
  return (
    <div>
      <h3 className={styles.fieldTitle}>{title}</h3>
      <p className={styles.field}>{value}</p>
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

  const handleEditToggle = () => setIsEditing((prev) => !prev);
  const handleSave = () => {
    setIsEditing(false);
    onSave?.(currentValue);
  };

  return (
    <div className={styles.editFieldWrapper}>
      <div className={styles.editFieldContent}>
        <h3 className={styles.fieldTitle}>{title}</h3>
        <Input
          className={styles.editField}
          type="text"
          value={currentValue}
          placeholder={value}
          onChange={(e) => setCurrentValue(e.target.value)}
          disabled={!isEditing}
        />
      </div>

      <div className={styles.buttonWrapper}>
        {isEditing ? (
          <>
            <Button size="sm" color="outline" onClick={handleSave}>
              저장
            </Button>
            <Button size="sm" color="outline" onClick={handleEditToggle}>
              취소
            </Button>
          </>
        ) : (
          <Button size="sm" color="outline" onClick={handleEditToggle}>
            변경
          </Button>
        )}
      </div>
    </div>
  );
}

MyInfoCard.Field = MyInfoField;
MyInfoCard.EditableField = MyInfoEditableField;

export { MyInfoCard };
