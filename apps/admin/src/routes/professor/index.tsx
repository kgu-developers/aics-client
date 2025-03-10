import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';
import ProfessorTable from '~/routes/professor/components/professor-table';

export const Route = createFileRoute('/professor/')({
  component: ProfessorPage,
});

function ProfessorPage() {
  return (
    <section className="py-10 px-16">
      <Button type="primary" className="mb-4">
        교수 추가하기
      </Button>

      <ProfessorTable />
    </section>
  );
}

export default ProfessorPage;
