import { Button } from 'antd';

import { Container } from '~/shared/components/Container';

import type { Mode } from '../../types/allManagement';

interface UserFinalReportViewProps {
  setMode: (mode: Mode) => void;
}

export default function UserFinalReportView({
  setMode,
}: UserFinalReportViewProps) {
  return (
    <Container style={{ padding: '0px' }}>
      <Button onClick={() => setMode('detail')}>돌아가기</Button>
    </Container>
  );
}
