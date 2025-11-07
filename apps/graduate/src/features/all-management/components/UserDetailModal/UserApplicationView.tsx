import { Button } from 'antd';

import { Container } from '~/shared/components/Container';

import type { Mode } from '../../types/allManagement';

interface UserApplicationViewProps {
  setMode: (mode: Mode) => void;
}

export default function UserApplicationView({
  setMode,
}: UserApplicationViewProps) {
  return (
    <Container style={{ padding: '0px' }}>
      <Button onClick={() => setMode('detail')}>돌아가기</Button>
    </Container>
  );
}
