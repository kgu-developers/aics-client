import { createFileRoute } from '@tanstack/react-router';
import { LabCreator } from '~/components/lab/lab-creator';
import LabTable from '~/components/lab/lab-table';

export const Route = createFileRoute('/lab/')({
  component: LabPage,
});

function LabPage() {
  return (
    <section>
      <LabCreator />
      <LabTable />
    </section>
  );
}

export default LabPage;
