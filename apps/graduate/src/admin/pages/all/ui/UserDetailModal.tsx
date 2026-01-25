import { useNavigate } from '@tanstack/react-router';
import { Descriptions, Modal, Spin, Table } from 'antd';

import { Header } from '~/shared/components';

import type { PeriodData, StageData } from '../types/allManagement';
import {
  buildStageData,
  formatSubmissionStatus,
  getStatusLabel,
} from '../utils';

import { useStudentDetail } from '~/admin/features/studentDetail';
import { Container } from '~/admin/shared/components/Container';
import { vars } from '~/vars.css';

interface UserDetailModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  graduationUserId: number;
  period: PeriodData;
}

export default function UserDetailModal({
  isModalOpen,
  setIsModalOpen,
  graduationUserId,
  period,
}: UserDetailModalProps) {
  const navigate = useNavigate();
  const {
    data: studentDetail,
    isLoading,
    error,
  } = useStudentDetail(graduationUserId);
  const {
    name,
    studentId,
    graduationDate,
    advisor,
    major,
    capstoneCompletion,
    status,
  } = studentDetail ?? {};

  const stageData = status ? buildStageData(status, period) : [];

  const columns = [
    {
      title: '단계',
      dataIndex: 'stage',
      key: 'stage',
      render: (_: string, record: StageData) => {
        return record.isSubmitted ? (
          <button
            type='button'
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: vars.colors.main,
              textDecoration: 'underline',
            }}
            onClick={() => {
              navigate({
                to: '/file-preview',
                search: {
                  fileId: record.fileId!,
                  graduationUserId: graduationUserId,
                },
              });
            }}
          >
            {record.stage}
          </button>
        ) : (
          <span>{record.stage}</span>
        );
      },
    },
    { title: '일정', dataIndex: 'period', key: 'period' },
    {
      title: '상태',
      key: 'status',
      render: (_: unknown, record: StageData) =>
        formatSubmissionStatus(
          record.createdAt,
          record.isSubmitted,
          record.isApproved,
        ),
    },
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <Header title='로딩 중...' subtitle='학생 상세 보기' />
          <Container style={{ padding: '40px', textAlign: 'center' }}>
            <Spin size='large' />
          </Container>
        </>
      );
    }

    if (error) {
      return (
        <>
          <Header title='오류 발생' subtitle='학생 상세 보기' />
          <Container style={{ padding: '20px', textAlign: 'center' }}>
            {error instanceof Error
              ? error.message
              : '학생 정보를 불러오는데 실패했습니다.'}
          </Container>
        </>
      );
    }

    return (
      <>
        <Header title={name!} subtitle='학생 상세 보기' />

        <Container style={{ padding: '0px' }}>
          <Descriptions column={2} bordered>
            <Descriptions.Item label='학번'>{studentId}</Descriptions.Item>
            <Descriptions.Item label='졸업시기'>
              {graduationDate}
            </Descriptions.Item>
            <Descriptions.Item label='이름'>{name}</Descriptions.Item>
            <Descriptions.Item label='지도교수'>{advisor}</Descriptions.Item>
            <Descriptions.Item label='소속학과'>{major}</Descriptions.Item>
            <Descriptions.Item label='기타자격'>
              {capstoneCompletion ? '캡스톤 이수' : '캡스톤 미이수'}
            </Descriptions.Item>
            <Descriptions.Item label='상태' span={2}>
              {getStatusLabel(status)}
            </Descriptions.Item>
          </Descriptions>
        </Container>

        <Container style={{ padding: '0px' }}>
          <Table
            dataSource={stageData}
            columns={columns}
            pagination={false}
            bordered
            rowKey='key'
          />
        </Container>
      </>
    );
  };

  return (
    <Modal
      open={isModalOpen}
      width={600}
      getContainer={false}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      centered
    >
      {renderContent()}
    </Modal>
  );
}
