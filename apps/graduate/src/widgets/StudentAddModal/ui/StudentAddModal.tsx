import { Col, Divider, Modal, Row } from 'antd';
import { useState } from 'react';


import { modalStyles } from '~/shared/config';

import { ModeCard } from './ModeCard';
import StudentAddMultiple from './StudentAddMultiple';
import StudentAddSingle from './StudentAddSingle';
import { MODE_OPTIONS, type StudentAddMode } from '../model/constants';
import * as styles from '../styles/StudentAddModal.css';
import type { GraduationUserCreateRequest } from '../types/studentAddModal';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (payload: GraduationUserCreateRequest) => void | Promise<void>;
  onSubmitMultiple?: (rows: GraduationUserCreateRequest[]) => void | Promise<void>;
};

export default function StudentAddModal({
  open,
  onClose,
  onSubmit,
  onSubmitMultiple,
}: Props) {
  const [mode, setMode] = useState<StudentAddMode>('single');

  const { width, styles: modalInnerStyles } = modalStyles('md');

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title='학생추가'
      width={width}
      styles={modalInnerStyles}
      destroyOnClose
      afterClose={() => setMode('single')}
      centered
    >
      <div className={styles.modeSelector}>
        <Row gutter={12} style={{ width: '100%' }}>
          {MODE_OPTIONS.map(option => (
            <Col span={12} key={option.key}>
              <ModeCard
                option={option}
                isActive={mode === option.key}
                onSelect={() => setMode(option.key)}
              />
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ margin: '20px 0 20px' }} />

      {mode === 'single' ? (
        <StudentAddSingle open={open} onSubmit={onSubmit} />
      ) : (
        <StudentAddMultiple open={open} onSubmitMultiple={onSubmitMultiple} />
      )}
    </Modal>
  );
}
