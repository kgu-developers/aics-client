import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';
import ClubTable from '~/components/club/club-table';

export const Route = createFileRoute('/club/')({
  component: LabPage,
});

function LabPage() {
  return (
    <section className="py-10 px-16">
      <Button type="primary" className="mb-4">
        동아리 추가하기
      </Button>

      <ClubTable />
    </section>
  );
}

export default LabPage;
