import { createFileRoute } from '@tanstack/react-router';
import { ProfessorCreator } from '~/components/professor/professor-creator';
import ProfessorTable from '~/components/professor/professor-table';

export const Route = createFileRoute('/professor/')({
  component: ProfessorPage,
});

function ProfessorPage() {
  return (
    <section className="py-10 px-16">
      <ProfessorCreator />
      <ProfessorTable />
    </section>
  );
}

export default ProfessorPage;
