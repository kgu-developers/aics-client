import { Card, Col, Divider, Modal, Row, Typography, theme } from 'antd';
import { useState } from 'react';

import { modalStyles } from '~/shared/config';

import * as styles from './StudentAddModal.css';
import StudentAddMultiple from './StudentAddMultipleModel/StudentAddMultiple';
import StudentAddSingle from './StudentAddSingleModel/StudentAddSingle';
import type { BulkUploadRow, SingleSubmitPayload } from './types';

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (payload: SingleSubmitPayload) => void | Promise<void>;
  onBulkSubmit?: (rows: BulkUploadRow[]) => void | Promise<void>;
};

export default function StudentAddModal({
  open,
  onClose,
  onSubmit,
  onBulkSubmit,
}: Props) {
  const [mode, setMode] = useState<'single' | 'excel'>('single');

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
          <Col span={12}>
            <Card
              size='small'
              onClick={() => setMode('single')}
              style={{
                cursor: 'pointer',
                background:
                  mode === 'single'
                    ? theme.useToken().token.colorBgContainer
                    : theme.useToken().token.colorFillQuaternary,
                borderColor:
                  mode === 'single'
                    ? theme.useToken().token.colorPrimary
                    : theme.useToken().token.colorBorderSecondary,
              }}
              bodyStyle={{ padding: 16 }}
            >
              <Typography.Title level={5} style={{ margin: 0 }}>
                단일 추가
              </Typography.Title>
              <Typography.Text type='secondary'>
                학생 정보를 수기로 입력해요.
              </Typography.Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              size='small'
              onClick={() => setMode('excel')}
              style={{
                cursor: 'pointer',
                background:
                  mode === 'excel'
                    ? theme.useToken().token.colorBgContainer
                    : theme.useToken().token.colorFillQuaternary,
                borderColor:
                  mode === 'excel'
                    ? theme.useToken().token.colorPrimary
                    : theme.useToken().token.colorBorderSecondary,
              }}
              bodyStyle={{ padding: 16 }}
            >
              <Typography.Title level={5} style={{ margin: 0 }}>
                엑셀 업로드
              </Typography.Title>
              <Typography.Text type='secondary'>
                엑셀 파일로 여러 명 입력해요.
              </Typography.Text>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider style={{ margin: '20px 0 20px' }} />

      {mode === 'single' ? (
        <StudentAddSingle open={open} onSubmit={onSubmit} />
      ) : (
        <StudentAddMultiple open={open} onBulkSubmit={onBulkSubmit} />
      )}
    </Modal>
  );
}
