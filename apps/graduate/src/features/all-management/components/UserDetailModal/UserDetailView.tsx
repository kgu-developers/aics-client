import { Table } from 'antd';

import { Container } from '~/shared/components/Container';

import { getStageColumns } from '../../constants/stageColumns';
import { useUserDetailModalContext } from '../../contexts/UserDetailModalContext';
import { stageData } from '../../mock/allManagement';

export default function UserDetailView() {
  const { setMode } = useUserDetailModalContext();
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
