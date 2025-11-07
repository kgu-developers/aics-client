import { Descriptions, Modal } from 'antd';
import { useState } from 'react';

import { Header } from '~/shared/components';
import { Container } from '~/shared/components/Container';

import UserApplicationView from './UserApplicationView';
import UserDetailView from './UserDetailView';
import UserFinalReportView from './UserFinalReportView';
import UserMiddleReportView from './UserMiddleReportView';
import { userDetailData } from '../../mock/allManagement';
import type { Mode } from '../../types/allManagement';
import { MODE_SUBTITLES } from '../../types/allManagement';

interface UserDetailModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  // selectedId: string;
}

export default function UserDetailModal({
  isModalOpen,
  setIsModalOpen,
}: UserDetailModalProps) {
  const [mode, setMode] = useState<Mode>('detail');
  const { studentId, period, name, professor, department, delay, etc } =
    userDetailData;

  return (
    <Modal
      open={isModalOpen}
      width={600}
      getContainer={false}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      centered
    >
      <Header title={name} subtitle={MODE_SUBTITLES[mode]} />

      <Container style={{ padding: '0px' }}>
        <Descriptions column={2} bordered>
          <Descriptions.Item label='학번'>{studentId}</Descriptions.Item>
          <Descriptions.Item label='졸업시기'>{period}</Descriptions.Item>
          <Descriptions.Item label='이름'>{name}</Descriptions.Item>
          <Descriptions.Item label='지도교수'>{professor}</Descriptions.Item>
          <Descriptions.Item label='소속학과'>{department}</Descriptions.Item>
          <Descriptions.Item label='지연횟수'>{delay}</Descriptions.Item>
          <Descriptions.Item label='기타자격'>{etc}</Descriptions.Item>
        </Descriptions>
      </Container>

      {mode === 'detail' && <UserDetailView setMode={setMode} />}
      {mode === 'application' && <UserApplicationView setMode={setMode} />}
      {mode === 'middleReport' && <UserMiddleReportView setMode={setMode} />}
      {mode === 'finalReport' && <UserFinalReportView setMode={setMode} />}
    </Modal>
  );
}
