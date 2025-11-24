import { Card, Col, Divider, Modal, Row, Typography, theme } from 'antd';
import { useState } from 'react';

import { modalStyles } from '~/shared/config';

import { MODE_OPTIONS, type StudentAddMode } from './constants';
import * as styles from './StudentAddModal.css';
import StudentAddMultiple from './StudentAddMultipleModel/StudentAddMultiple';
import StudentAddSingle from './StudentAddSingleModel/StudentAddSingle';
import type { MultipleUploadRow, SingleSubmitPayload } from './types';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (payload: SingleSubmitPayload) => void | Promise<void>;
  onSubmitMultiple?: (rows: MultipleUploadRow[]) => void | Promise<void>;
};

type ModeOption = (typeof MODE_OPTIONS)[number];

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

function ModeCard({
  option,
  isActive,
  onSelect,
}: {
  option: ModeOption;
  isActive: boolean;
  onSelect: () => void;
}) {
  const { token } = theme.useToken();

  return (
    <Card
      size='small'
      onClick={onSelect}
      style={{
        cursor: 'pointer',
        background: isActive
          ? token.colorBgContainer
          : token.colorFillQuaternary,
        borderColor: isActive ? token.colorPrimary : token.colorBorderSecondary,
      }}
      bodyStyle={{ padding: 16 }}
    >
      <Typography.Title level={5} style={{ margin: 0 }}>
        {option.title}
      </Typography.Title>
      <Typography.Text type='secondary'>{option.description}</Typography.Text>
    </Card>
  );
}
