import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';
import LabTable from '~/components/lab/lab-table';

export const Route = createFileRoute('/lab/')({
  component: LabPage,
});

function LabPage() {
  return (
    <section>
      <Button type="primary" className="mb-4">
        연구실 추가하기
      </Button>

      <LabTable />
    </section>
  );
}

export default LabPage;
