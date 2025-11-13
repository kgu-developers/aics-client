import { Button } from 'antd';

import { Container } from '~/shared/components/Container';

import { useUserDetailModalContext } from '../../contexts/UserDetailModalContext';

export default function UserMiddleReportView() {
  const { setMode } = useUserDetailModalContext();
  return (
    <Container style={{ padding: '0px' }}>
      <Button onClick={() => setMode('detail')}>돌아가기</Button>
    </Container>
  );
}
