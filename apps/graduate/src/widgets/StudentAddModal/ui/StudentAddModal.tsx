import { Col, Divider, message, Modal, Row } from 'antd';
import { useState } from 'react';


import { modalStyles } from '~/shared/config';

import { useSubmitGraduationUser } from '~/widgets/StudentAddModal/hooks/useSubmitGraduationUser';

import { ModeCard } from './ModeCard';
import StudentAddMultiple from './StudentAddMultiple';
import StudentAddSingle from './StudentAddSingle';
import { MODE_OPTIONS, type StudentAddMode } from '../model/constants';
import * as styles from '../styles/StudentAddModal.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function StudentAddModal({ open, onClose }: Props) {
  const [mode, setMode] = useState<StudentAddMode>('single');
  const { submitSingle, submitBatch } = useSubmitGraduationUser();

  const { width, styles: modalInnerStyles } = modalStyles('md');

  const handleSingleSubmit = async (
    payload: Parameters<typeof submitSingle>[0],
  ) => {
    try {
      await submitSingle(payload);
      onClose();
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : '학생 추가에 실패했습니다.',
      );
    }
  };

  const handleMultipleSubmit = async (
    rows: Parameters<typeof submitBatch>[0],
  ) => {
    try {
      await submitBatch(rows);
      onClose();
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : '학생들 추가에 실패했습니다.',
      );
    }
  };

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
        <StudentAddSingle open={open} onSubmit={handleSingleSubmit} />
      ) : (
        <StudentAddMultiple
          open={open}
          onSubmitMultiple={handleMultipleSubmit}
        />
      )}
    </Modal>
  );
}
