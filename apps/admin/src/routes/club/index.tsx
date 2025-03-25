import { createFileRoute } from '@tanstack/react-router';
import ClubTable from '~/components/club/club-table';

export const Route = createFileRoute('/club/')({
  component: LabPage,
});

function LabPage() {
  return (
    <section className="py-10 px-16">
      <ClubTable />
    </section>
  );
}

export default LabPage;
