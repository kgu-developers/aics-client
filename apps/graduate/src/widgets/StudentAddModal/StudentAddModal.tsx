import { Col, Divider, Modal, Row } from 'antd';
import { useState } from 'react';

import { modalStyles } from '~/shared/config';

import { MODE_OPTIONS, type StudentAddMode } from './constants';
import { ModeCard } from './ModeCard';
import { StudentAddMultiple, StudentAddSingle } from './models';
import * as styles from './StudentAddModal.css';
import type { MultipleUploadRow, SingleSubmitPayload } from './types';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (payload: SingleSubmitPayload) => void | Promise<void>;
  onSubmitMultiple?: (rows: MultipleUploadRow[]) => void | Promise<void>;
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
      title='학생 추가'
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
