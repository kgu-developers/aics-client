import { Table } from 'antd';

import { Container } from '~/shared/components/Container';

import { getStageColumns } from '../../constants/stageColumns';
import { stageData } from '../../mock/allManagement';
import { Mode } from '../../types/allManagement';

interface UserDetailViewProps {
  setMode: (mode: Mode) => void;
}

export default function UserDetailView({ setMode }: UserDetailViewProps) {
  const stageColumns = getStageColumns(setMode);

  return (
    <>
      <Container style={{ padding: '0px' }}>
        <Table
          dataSource={stageData}
          columns={stageColumns}
          pagination={false}
          bordered
        />
      </Container>
    </>
  );
}
