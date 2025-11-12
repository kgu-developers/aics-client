import { createFileRoute } from '@tanstack/react-router';

import { LabCreator, LabTable } from '~/features/lab/components';

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
