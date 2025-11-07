import { Button } from 'antd';

import { Container } from '~/shared/components/Container';

import type { Mode } from '../../types/allManagement';

interface UserMiddleReportViewProps {
  setMode: (mode: Mode) => void;
}

export default function UserMiddleReportView({
  setMode,
}: UserMiddleReportViewProps) {
  return (
    <Container style={{ padding: '0px' }}>
      <Button onClick={() => setMode('detail')}>돌아가기</Button>
    </Container>
  );
}
